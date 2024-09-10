import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';

const RelativeTablespaceSize = () => {
  // Dados fictícios da tabela
  const tablespaceData = [
    { name: 'LRINDEXES_LONG_TABLESPACE_NAME_EXAMPLE', usagePercent: 93 },
    { name: 'LRDADOS', usagePercent: 87 },
    { name: 'USERS', usagePercent: 86 },
    { name: 'BDCOMUM_DT', usagePercent: 85 },
    { name: 'SYSTEM', usagePercent: 70 }
  ];

  // Função para gerar a cor proporcional à porcentagem
  const getProgressBarColor = (percent) => {
    return percent > 80 ? 'error.main' : 'success.main';
  };

  return (
    <Card sx={{ margin: '0 auto', padding: '20px' }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Tablespace Tamanho Relativo
        </Typography>

        {tablespaceData.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Grid container alignItems="center">
              {/* Nome do tablespace */}
              <Grid item xs={4} sm={2}>
                <Typography
                  variant="body1"
                  noWrap // Garante que o texto não quebre em várias linhas
                  sx={{
                    overflow: 'hidden', // Esconde o texto extra
                    textOverflow: 'ellipsis', // Adiciona os três pontinhos
                    whiteSpace: 'nowrap' // Garante que o texto fique em uma linha
                  }}
                >
                  {item.name}
                </Typography>
              </Grid>

              {/* Barra de progresso */}
              <Grid item xs={6} sm={8}>
                <Box
                  sx={{
                    height: '20px',
                    width: '100%',
                    bgcolor: '#ddd',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    mr: 1,
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      width: `${item.usagePercent}%`,
                      bgcolor: getProgressBarColor(item.usagePercent),
                      transition: 'width 0.4s ease',
                    }}
                  />
                </Box>
              </Grid>

              {/* Percentual de uso */}
              <Grid item xs={2} sm={2} sx={{ textAlign: 'right' }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: getProgressBarColor(item.usagePercent),
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.usagePercent}%
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RelativeTablespaceSize;
