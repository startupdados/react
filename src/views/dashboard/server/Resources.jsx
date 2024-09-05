import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, Box, useTheme } from '@mui/material';

// Dados fictícios para o gráfico
const data = [
  { name: 'Server 1', CPU: 49, IDLE: 11, DiskIO: 0 },
];

const ServerResourceBarChart = ({ title }) => {
  const theme = useTheme();
  const maxHeight = 180; // Altura máxima das barras em pixels
  const maxValue = Math.max(...data.map(server => Math.max(server.CPU, server.IDLE, server.DiskIO))); // Valor máximo entre todas as métricas

  const cardContentRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (cardContentRef.current) {
        const cardWidth = cardContentRef.current.offsetWidth;
        setBarWidth(cardWidth / (data.length * 5)); // Dividir a largura do card pelo número de barras
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" component="div" align="center">
            {title + ' - Uso de Recursos / Processos'}
          </Typography>
        }
      />
      <CardContent ref={cardContentRef}>
        {data.map((server, index) => (
          <Box key={index} sx={{ mb: 2, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 1, mt: -2 }}>
              {/* CPU Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.CPU}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.CPU / maxValue) * maxHeight) / 12}em`, // Altura proporcional ao valor máximo
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h4">CPU</Typography>
              </Box>
              {/* IDLE Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.IDLE}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.IDLE / maxValue) * maxHeight) / 12}em`, // Altura proporcional ao valor máximo
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h4">IDLE</Typography>
              </Box>
              {/* Disk I/O Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.DiskIO}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.DiskIO / maxValue) * maxHeight) / 12}em`, // Altura proporcional ao valor máximo
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h4">Disco I/O</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default ServerResourceBarChart;