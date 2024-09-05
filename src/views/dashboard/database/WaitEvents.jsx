import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, Box, useTheme } from '@mui/material';

// Dados fictícios para o gráfico
const data = [
  { name: 'Server 1', LOCK: 20, Idle: 40, Cluster: 10, Other: 15, UserIO: 25, Network: 30 },
];

const WaitEvents = () => {
  const theme = useTheme();
  const maxHeight = 180; // Altura máxima das barras em pixels
  const maxValue = Math.max(...data.map(server => Math.max(server.LOCK, server.Idle, server.Cluster, server.Other, server.UserIO, server.Network))); // Valor máximo entre todas as métricas

  const cardContentRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (cardContentRef.current) {
        const cardWidth = cardContentRef.current.offsetWidth;
        setBarWidth(cardWidth / (data.length * 6)); // Dividir a largura do card pelo número de barras
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
            Wait Events
          </Typography>
        }
      />
      <CardContent ref={cardContentRef}>
        {data.map((server, index) => (
          <Box key={index} sx={{ mb: 2, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 1, mt: -2 }}>
              {/* LOCK Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.LOCK}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.LOCK / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h6">LOCK</Typography>
              </Box>
              {/* Idle Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.Idle}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.Idle / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h6">Idle</Typography>
              </Box>
              {/* Cluster Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.Cluster}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.Cluster / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h6">Cluster</Typography>
              </Box>
              {/* Other Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.Other}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.Other / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h6">Other</Typography>
              </Box>
              {/* User I/O Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.UserIO}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.UserIO / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h6">User I/O</Typography>
              </Box>
              {/* Network Bar */}
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>{server.Network}</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.Network / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="h6">Network</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default WaitEvents;
