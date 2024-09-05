import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const OnlineDays = () => {
  // Definindo valores dentro do componente
  const serverName = 'Servidor01';
  const daysOnline = 256;

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h2">
            Servidor {serverName} - Dias Online
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            {daysOnline}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OnlineDays;
