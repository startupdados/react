import React from 'react';
import { Box, Typography, Card, Chip } from '@mui/material';
import { styled } from '@mui/system';

// Estilo para o card
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '12px', // Bordas levemente arredondadas
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '300px', // Limitar o tamanho dos cards
  textAlign: 'center', // Alinhar textos no centro
}));

// Estilo para o box da sigla e nome
const ClientInitialsBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
  padding: theme.spacing(2),
  borderRadius: '8px',
}));

const ClientCard = ({ client }) => {
  const { initials, fullName, qtdServidores, dataRegistro, dataUltimaAtualizacao, status } = client;

  return (
    <StyledCard>
      <ClientInitialsBox>
        <Typography variant="h3" gutterBottom color="secondary.light">
          {initials}
        </Typography>
        <Typography variant="subtitle1" color="secondary.light">
          {fullName}
        </Typography>
      </ClientInitialsBox>

      <Box sx={{ marginTop: 2 }}>
        {/* Alinhamento e espaçamento igual para as linhas */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
          {/* Quantidade de servidores */}
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">Qtd Servidor</Typography>
            <Typography variant="h5" color="secondary.dark">{qtdServidores}</Typography>
          </Box>

          {/* Data de Registro */}
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">Data Registro</Typography>
            <Typography variant="h5" color="secondary.dark">{dataRegistro}</Typography>
          </Box>

          {/* Última Atualização */}
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">Última Atualização</Typography>
            <Typography variant="h5" color="secondary.dark">{dataUltimaAtualizacao}</Typography>
          </Box>
        </Box>

        {/* Status */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Chip
            label={status === 'ATIVADO' ? 'Ativado' : 'Desativado'}
            sx={{
              backgroundColor: status === 'ATIVADO' ? 'success.dark' : 'warning.dark',
              color: 'white',
              fontWeight: 'bold'
            }}
          />
        </Box>
      </Box>
    </StyledCard>
  );
};

export default ClientCard;
