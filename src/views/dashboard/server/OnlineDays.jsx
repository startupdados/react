import React from 'react';
import { Card, CardContent, Typography, Avatar, ListItem, ListItemAvatar, ListItemText, Box } from '@mui/material';
import { IconServer } from '@tabler/icons-react'; // Usando o mesmo ícone de servidor

const OnlineDays = () => {
  // Definindo valores dentro do componente
  const serverName = 'Servidor01';
  const daysOnline = 256;

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Avatar com ícone de servidor */}
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                sx={{
                  bgcolor: 'primary.light',
                  color: 'primary.dark',
                  width: 56, // Ajustando o tamanho do Avatar
                  height: 56
                }}
              >
                <IconServer />
              </Avatar>
            </ListItemAvatar>

            {/* Nome do servidor */}
            <ListItemText
              primary={
                <Typography variant="h2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  {serverName}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle1" sx={{ color: 'grey.500', textAlign: 'center' }}>
                  Dias Online
                </Typography>
              }
              sx={{ textAlign: 'center' }}
            />

            {/* Dias online */}
            <Typography variant="h" sx={{ fontWeight: 'bold' }}>
              {daysOnline}
            </Typography>
          </ListItem>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OnlineDays;
