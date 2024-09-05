import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, Box, useTheme, Grid } from '@mui/material';

// Primeiro Card: Sessões Ativas
const ActiveSessionsCard = () => {
  const theme = useTheme();
  const activeSessions = 150; // Número de sessões ativas

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" component="div" align="center">
            INST 01 - Sessões Ativas
          </Typography>
        }
      />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h2">{activeSessions}</Typography>
          <Box
            sx={{
              width: '80%',
              height: '10px',
              backgroundColor: theme.palette.success.main,
              borderRadius: '5px',
              mt: 2,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

// Segundo Card: Uso de Recursos
const ResourceUsageCard = () => {
  const theme = useTheme();
  const data = [
    { name: 'Server 1', CPU: 49, IDLE: 11, DiskIO: 0 },
  ];
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
          <Typography variant="h5" component="div" align="center">
            Instancia 01 - Uso de Recursos / Processos
          </Typography>
        }
      />
      <CardContent ref={cardContentRef}>
        {data.map((server, index) => (
          <Box key={index} sx={{ mb: 2, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 1, mt: -2 }}>
              {/* CPU Bar */}
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>{server.CPU}%</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.CPU / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="body2">CPU</Typography>
              </Box>
              {/* IDLE Bar */}
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>{server.IDLE}%</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.IDLE / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="body2">IDLE</Typography>
              </Box>
              {/* Disk I/O Bar */}
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>{server.DiskIO}%</Typography>
                <Box
                  sx={{
                    width: `${barWidth}px`,
                    height: `${((server.DiskIO / maxValue) * maxHeight) / 12}em`,
                    backgroundColor: theme.palette.success.light,
                    mb: '1em',
                  }}
                />
                <Typography variant="body2">Disco I/O</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

// Componente Principal com os dois Cards
const Instances = () => {
  return (
    <Box sx={{ p: 3 }}>
   <Grid container rowSpacing={1.5} columnSpacing={0}>
        <Grid item xs={12} >
          <ActiveSessionsCard />
        </Grid>
        <Grid item xs={12} >
          <ResourceUsageCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Instances;
