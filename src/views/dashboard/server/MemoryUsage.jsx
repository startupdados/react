import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, Typography, Box, useTheme } from '@mui/material';

// Dados fictícios para a representação
const memoryData = [
  { name: 'Mem. Total', value: 300 },
  { name: 'Mem. Free', value: 33 },
  { name: 'Mem. Used', value: 238 },
  { name: 'Swap Total', value: 14 },
  { name: 'Swap Free', value: 14 },
  { name: 'Swap Used', value: 0 },
];

const MemoryUsage = ({ title }) => {
  const theme = useTheme();
  const cardRef = useRef();

  // Encontrar o maior valor em memoryData para normalizar o cálculo dos retângulos
  const maxValue = Math.max(...memoryData.map(item => item.value));

  // Função para calcular a porcentagem de preenchimento dos retângulos
  const calculateFillPercentage = (value) => {
    return (value / maxValue) * 100; // Cálculo proporcional ao valor máximo encontrado
  };

  return (
    <Card ref={cardRef}>
      <CardHeader
        title={
          <Typography variant="h4" component="div" align="center">
            {title} Uso de Memória (GB) - SO
          </Typography>
        }
      />
      <CardContent>
        {memoryData.map((item, index) => {
          const fillPercentage = calculateFillPercentage(item.value);

          return (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: '1.5em' }}>
              <Typography
                sx={{
                  fontSize: '1em',
                  minWidth: '5em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.name}
              </Typography>
              <Box sx={{ flexGrow: 1, mx: '1em', position: 'relative' }}>
                {/* Contêiner de fundo cinza para os retângulos */}
                <Box
                  sx={{
                    width: '100%',
                    height: '1.5em',
                    backgroundColor: theme.palette.grey[700],
                    borderRadius: '0.25em',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* Retângulo verde proporcional ao valor */}
                  <Box
                    sx={{
                      width: `${fillPercentage}%`,
                      height: '100%',
                      backgroundColor: theme.palette.success.main,
                    }}
                  />
                </Box>
              </Box>
              <Typography sx={{ minWidth: '3em', maxfontSize: '2em', color: 'green', fontWeight: 'bold', ml: '1em' }}>
                {item.value}
              </Typography>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default MemoryUsage;
