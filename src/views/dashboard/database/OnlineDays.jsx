import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const OnlineDays = ({ servers }) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: "20em" }}>
          {servers.map((server, index) => (
            <Box key={index} sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h2">
                Servidor {server.name} - Dias Online
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                {server.daysOnline}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

// Exemplo de uso
const serverData = [
  { name: 'Servidor01', daysOnline: 256 },
  { name: 'Servidor02', daysOnline: 123 },
  { name: 'Servidor03', daysOnline: 45 }
];

export default function App() {
  return <OnlineDays servers={serverData} />;
}
