import React from 'react';
import { Card, CardContent, CardHeader, Typography, Box, useTheme } from '@mui/material';

// Dados fictícios para o gráfico
const data = [
  { name: 'Server 1', CPU: 49, IDLE: 11, DiskIO: 0 },
];

const ServerResourceBarChart = ({ title }) => {
 const theme = useTheme();
  const maxHeight = 180; // Altura máxima das barras em pixels
  const maxValue = Math.max(...data.map(server => Math.max(server.CPU, server.IDLE, server.DiskIO))); // Valor máximo entre todas as métricas

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" component="div" align="center">
            {title + ' - Uso de Recursos / Processos'}
          </Typography>
        }
      />
      <CardContent>
        {data.map((server, index) => (
          <Box key={index} sx={{ mb: 2, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 2, mt: -2 }}>
              {/* CPU Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.CPU}</Typography>
                <Box
                  sx={{
                    width: '6em',
                    height: `${(server.CPU / maxValue) * maxHeight}px`, // Altura proporcional ao valor máximo
                    backgroundColor: theme.palette.success.light,
                    mb: 1,
                  }}
                />
                <Typography variant="h4">CPU</Typography>
              </Box>
              {/* IDLE Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.IDLE}</Typography>
                <Box
                  sx={{
                    width: '6em',
                    height: `${(server.IDLE / maxValue) * maxHeight}px`, // Altura proporcional ao valor máximo
                    backgroundColor: theme.palette.success.light,
                    mb: 1,
                  }}
                />
                <Typography variant="h4">IDLE</Typography>
              </Box>
              {/* Disk I/O Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.DiskIO}</Typography>
                <Box
                  sx={{
                    width: '6em',
                    height: `${(server.DiskIO / maxValue) * maxHeight}px`, // Altura proporcional ao valor máximo
                    backgroundColor: theme.palette.success.light,
                    mb: 1,
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
