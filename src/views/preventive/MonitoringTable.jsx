import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableSortLabel,
  useTheme,
  Chip,
  Button,
} from '@mui/material';

const initialMonitoringData = [
  {
    dataColeta: '2024-09-01 13:06:27',
    cliente: 'Cliente Um',
    banco: 'Banco 1',
    tablespace: 'TABLESPACE1',
    mbAlocado: 500,
    mbLivre: 100,
    pctLivre: 20,
    status: 'Em Analise',
  },
  {
    dataColeta: '2024-09-02 14:06:27',
    cliente: 'Cliente Dois',
    banco: 'Banco 2',
    tablespace: 'TABLESPACE2',
    mbAlocado: 1000,
    mbLivre: 300,
    pctLivre: 30,
    status: 'Concluido',
  },
  {
    dataColeta: '2024-09-03 15:06:27',
    cliente: 'Cliente Três',
    banco: 'Banco 3',
    tablespace: 'TABLESPACE3',
    mbAlocado: 2000,
    mbLivre: 100,
    pctLivre: 5,
    status: 'Não Registrado',
  },
];

const descendingComparator = (a, b, orderBy) => {
  if (orderBy === 'dataColeta') {
    return new Date(b[orderBy]) - new Date(a[orderBy]);
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const MonitoringTable = ({ title }) => {
  const theme = useTheme();
  const [monitoringData, setMonitoringData] = useState(initialMonitoringData);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    const sortedData = [...monitoringData].sort(getComparator(isAsc ? 'desc' : 'asc', property));
    setMonitoringData(sortedData);
  };

  const headCells = [
    { id: 'dataColeta', label: 'DATA DE COLETA' },
    { id: 'cliente', label: 'CLIENTE' },
    { id: 'banco', label: 'BANCO DE DADOS' },
    { id: 'tablespace', label: 'TABLESPACE CRITICA' },
    { id: 'mbAlocado', label: 'TOTAL ALOCADO (MB)' },
    { id: 'mbLivre', label: 'ESPAÇO LIVRE (MB)' },
    { id: 'pctLivre', label: 'ESPAÇO LIVRE (%)' },
    { id: 'status', label: 'STATUS' },
    { id: 'acao', label: 'AÇÃO', sortable: false },
  ];

  const renderStatusChip = (status) => {
    let color;
    switch (status) {
      case 'Não Registrado':
        color = 'default';
        break;
      case 'Em Analise':
        color = 'warning';
        break;
      case 'Concluido':
        color = 'success';
        break;
      default:
        color = 'default';
    }
    return <Chip label={status} color={color} />;
  };

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h4" component="div" align="center">{title} Monitoring</Typography>}
      />
      <CardContent>
        <TableContainer sx={{ maxWidth: '100%', overflowX: 'auto' }}>
          <Table stickyHeader sx={{ tableLayout: 'auto' }}>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align="center"
                    sx={{ backgroundColor: theme.palette.primary.main, color: 'white', whiteSpace: 'nowrap' }}
                  >
                    {headCell.sortable !== false ? (
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={() => handleRequestSort(headCell.id)}
                        sx={{
                          color: 'white !important',
                          '&.Mui-active': {
                            color: 'white !important',
                          },
                          '& .MuiTableSortLabel-icon': {
                            color: 'white !important',
                          },
                        }}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    ) : (
                      headCell.label
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {monitoringData.map((data, index) => (
                <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }}>
                  <TableCell align="center">{data.dataColeta}</TableCell>
                  <TableCell align="center">{data.cliente}</TableCell>
                  <TableCell align="center">{data.banco}</TableCell>
                  <TableCell align="center">{data.tablespace}</TableCell>
                  <TableCell align="center">{data.mbAlocado}</TableCell>
                  <TableCell align="center">{data.mbLivre}</TableCell>
                  <TableCell align="center">{data.pctLivre}</TableCell>
                  <TableCell align="center">{renderStatusChip(data.status)}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">Chamado</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MonitoringTable;