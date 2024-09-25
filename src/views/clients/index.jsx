import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import ClientsList from './ClientsList';
import clientService from 'services/clientService'; // Certifique-se de importar o clientService corretamente

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os clientes
  const fetchClients = async () => {
    setLoading(true); // Inicia o carregamento
    try {
      const response = await clientService.getAllClients();
      
      // Mapeia os dados para o formato esperado pelos cartões de clientes
      const formattedClients = response.map((client) => ({
        id: client.id,
        initials: client.sigla,
        fullName: client.nome,
        qtdServidores: client.quantidadeServidores,
        dataRegistro: new Date(client.dataRegistro).toLocaleDateString('pt-BR'),
        dataUltimaAtualizacao: new Date(client.dataSituacaoAtualizada).toLocaleDateString('pt-BR'),
        status: client.status // Alterado de 'status' para 'situacao'
      }));

      setClients(formattedClients);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // useEffect para buscar os clientes ao montar o componente
  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <Typography variant="h1" sx={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        Clientes
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <ClientsList clients={clients} />
      )}
    </div>
  );
};

export default ClientsPage;
