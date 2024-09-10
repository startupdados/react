import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ClientErrorSquare = ({ clientSigla, clientName, errorCount, errors, onClick }) => {
  const theme = useTheme();

  // Verifica se há algum erro do tipo standby
  const hasStandbyError = errors.some(error => error.type === 'standby');

  // Define a cor de fundo com base no erro
  const backgroundColor = hasStandbyError
    ? theme.palette.warning.dark // Se houver standby, use amarelo
    : errorCount > 0
    ? theme.palette.error.main    // Se houver erros, use vermelho
    : theme.palette.success.dark; // Se não houver erros, use verde

  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: backgroundColor,
        color: "white", // Mantém o texto branco
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
        borderRadius: 2,
        marginBottom: 2,
        marginRight: 2,
        cursor: 'pointer',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', paddingTop: 1, paddingBottom: 1, textAlign: 'center', color: 'white' }}>
        {clientSigla}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: 48, fontWeight: 'bold', paddingTop: 1, paddingBottom: 2, textAlign: 'center', color: 'white' }}>
        {errorCount}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 18, paddingTop: 1, paddingBottom: 1, textAlign: 'center', color: 'white' }}>
        {clientName}
      </Typography>
    </Box>
  );
};

export default ClientErrorSquare;
