import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, CircularProgress } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import GenericTable from './GenericTable';
import GenericDrawer from './GenericDrawer'; // Importe o drawer
import monitoringService from 'services/monitoringService'; // Importe o serviço de monitoring

const Monitoring = () => {
  const [procedures, setProcedures] = useState([]);
  const [tablesData, setTablesData] = useState({}); // Para armazenar os dados completos das tabelas
  const [loadingTables, setLoadingTables] = useState({}); // Controle de loading por tabela
  const [drawerOpen, setDrawerOpen] = useState(false); // Controle do drawer
  const [selectedRowData, setSelectedRowData] = useState(null); // Dados da linha selecionada

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const fetchedProcedures = await monitoringService.getProcedures();
        setProcedures(fetchedProcedures);
        fetchedProcedures.forEach(procedure => handleExecuteProcedure(procedure));
      } catch (error) {
        console.error('Erro ao buscar procedures:', error);
      }
    };

    fetchProcedures();
  }, []);

  const handleExecuteProcedure = async (procedure) => {
    setLoadingTables((prevState) => ({
      ...prevState,
      [procedure]: true,
    }));
    try {
      const result = await monitoringService.executeProcedure(procedure);
      setTablesData((prevData) => ({
        ...prevData,
        [procedure]: result,
      }));
    } catch (error) {
      console.error(`Erro ao executar procedure ${procedure}:`, error);
    } finally {
      setLoadingTables((prevState) => ({
        ...prevState,
        [procedure]: false,
      }));
    }
  };

  const formatProcedureName = (procedure) => {
    return procedure
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  

  // Função para abrir o drawer com os dados da linha selecionada
  const handleRowMenuClick = (rowData) => {
    setSelectedRowData(rowData); // Mantém todos os dados da linha
    setDrawerOpen(true); // Abre o drawer
  };

  return (
    <Box sx={{ padding: 0 }}>
      <div>
        {procedures.map((procedure) => (
          <Box key={procedure} sx={{ marginBottom: 4 }}>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Typography
                variant="h1"
                component="div"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {formatProcedureName(procedure)}
              </Typography>

              <IconButton
                color="primary"
                onClick={() => handleExecuteProcedure(procedure)}
                sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}
                disabled={loadingTables[procedure]}
              >
                {loadingTables[procedure] ? <CircularProgress size={24} /> : <RefreshIcon />}
              </IconButton>
            </Box>

            {loadingTables[procedure] ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                <CircularProgress />
              </Box>
            ) : tablesData[procedure] ? (
              <GenericTable
                data={tablesData[procedure]} // Passa os dados completos, sem filtrar
                onRowMenuClick={handleRowMenuClick}
              />
            ) : (
              <Typography align="center">Tabela vazia</Typography>
            )}
          </Box>
        ))}
      </div>

      <GenericDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        data={selectedRowData} // Passa os dados completos da linha
      />
    </Box>
  );
};


export default Monitoring;
 // Função para formatar o nome da procedure
