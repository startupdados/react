import React, { useState } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClientCard from './ClientCard';

// Componente de lista que renderiza os cartões dos clientes
const ClientsList = ({ clients }) => {
  const [filter, setFilter] = useState('');

  // Função para filtrar os clientes com base na nova estrutura
  const filteredClients = clients.filter((client) =>
    client.fullName?.toLowerCase().includes(filter.toLowerCase()) ||
    client.initials?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      {/* Campo de texto para filtragem */}
      <TextField
        placeholder="Filtrar por nome ou sigla"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />

      {/* Renderização da lista de clientes filtrados */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center', // Centraliza os cartões
          gap: 2, // Aumenta a distância entre os cards
        }}
      >
        {filteredClients.map((client) => (
          <ClientCard key={client.id} client={client} /> // Garante que a chave seja única
        ))}
      </Box>
    </Box>
  );
};

export default ClientsList;
