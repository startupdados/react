import React from 'react';
import { Card, CardContent, CardHeader, Typography, Box, useTheme } from '@mui/material';

// Dados fictícios para o gráfico
const data = [
  { time: '5 min', value: 7 },
  { time: '10 min', value: 5 },
  { time: '15 min', value: 3 },
];

const AmbientLoadChart = ({ title }) => {
  const theme = useTheme();
  const maxWidth = 300; // Largura máxima das barras em pixels
  const maxValue = Math.max(...data.map(item => item.value)); // Valor máximo para normalizar o tamanho das barras

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" component="div" align="center">
            {title + " - Carga Média do Ambiente"}
          </Typography>
        }
      />
      <CardContent>
        {data.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="h2" sx={{ mb: 0.5 }}>
              {item.time}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: `${(item.value / maxValue) * maxWidth}px`, // Largura proporcional ao valor máximo
                  height: '24px', // Altura fixa das barras
                  backgroundColor: theme.palette.success.main,
                  borderRadius: '8px', // Borda levemente arredondada
                  mr: 2, // Espaço entre a barra e o valor
                }}
              />
              <Typography variant="h3">{item.value}</Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default AmbientLoadChart;
