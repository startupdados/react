import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import ClientErrorSquare from "./ClientErrorSquare";
import ErrorModal from "./ErrorModal";
import monitoringService from 'services/monitoringService'; // Certifique-se de importar corretamente

const ErrorPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [errorData, setErrorData] = useState([]); // Inicialize com um array vazio
  const [loading, setLoading] = useState(true);

  // Funções para abrir e fechar o modal
  const handleOpen = (client) => {
    setSelectedClient(client);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // Função para buscar os dados de erros da API
  const fetchErrorData = async () => {
    try {
      const data = await monitoringService.getErros();
      setErrorData(data);
    } catch (error) {
      console.error('Erro ao buscar dados de erros:', error);
    } finally {
      setLoading(false); // Para o carregamento, independentemente do resultado
    }
  };

  // useEffect para buscar os dados quando o componente for montado
  useEffect(() => {
    fetchErrorData();
  }, []);

  // Verifique se os dados ainda estão carregando
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    ); // Exibe um ícone de carregamento enquanto os dados estão sendo buscados
  }

  // Ordenar o array pelo número de erros (errorCount), em ordem decrescente
  const sortedErrorData = errorData?.sort((a, b) => b.TOTAL_QTD_ERROS - a.TOTAL_QTD_ERROS) || [];

  return (
    <Box
      padding={2}
      display="flex"
      flexWrap="wrap"
      justifyContent={{ xs: 'center', md: 'center', lg: 'flex-start' }} // Centraliza nas telas pequenas e alinha à esquerda nas grandes
    >
      {sortedErrorData.map((clientError, index) => (
        <ClientErrorSquare
          key={index}
          clientSigla={clientError.SIGLA}
          clientName={clientError.NOME_CLIENTE}
          errorCount={clientError.TOTAL_QTD_ERROS}
          errors={clientError.TIPO_ALERTA_ERROS}  // Passe os erros como prop
          onClick={() => handleOpen(clientError)}
        />
      ))}

      {/* Modal para exibir informações detalhadas */}
      <ErrorModal open={open} onClose={handleClose} selectedClient={selectedClient} />
    </Box>
  );
};

export default ErrorPage;