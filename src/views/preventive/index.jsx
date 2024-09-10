import React from 'react';
import { Box, Typography , Chip,
  Button, } from '@mui/material';
import MonitoringTable from './MonitoringTable'; // Certifique-se de que o caminho está correto
import CriticalDiskTable from './CriticalDiskTable';
import GenericTable from 'ui-component/charts/GenericTable';
const Monitoring = () => {
  const jsonData = [
    {
      Nome: 'João da Silva',
      Idade: 30,
      Cidade: 'São Paulo',
      Biografia: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Biografia2: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Biografia3: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Status: 'Ativo',
    },
    {
      Nome: 'Maria Ferreira',
      Idade: 22,
      Cidade: 'Rio de Janeiro',
      Biografia: 'Maria é uma desenvolvedora front-end apaixonada por design de interfaces.',
      Biografia2: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Biografia3: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Status: 'Inativo',
    },
    {
      Nome: 'Carlos Souza',
      Idade: 40,
      Cidade: 'Brasília',
      Biografia: 'Carlos é gerente de projetos com vasta experiência em metodologias ágeis.',
      Biografia2: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Biografia3: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Status: 'Ativo',
    },
    {
      Nome: 'Ana Oliveira',
      Idade: 28,
      Cidade: 'Salvador',
      Biografia: 'Ana é uma desenvolvedora full-stack com experiência em diversas tecnologias.',
      Biografia2: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Biografia3: 'João é um engenheiro de software com mais de 10 anos de experiência.',
      Status: 'Pendente',
    },
  ];

  const customColumns = [
    {
      id: 'action',
      label: 'Ação',
      render: (row) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert(`Executando ação para ${row.Nome}`)}
        >
          Executar
        </Button>
      ),
    },
    {
      id: 'statusChip',
      label: 'Status',
      render: (row) => (
        <Chip
          label={row.Status}
          color={
            row.Status === 'Ativo'
              ? 'success'
              : row.Status === 'Inativo'
              ? 'error'
              : 'warning'
          }
        />
      ),
    },
  ];
  return (
    <Box sx={{ padding: 0 }}>
      <Typography variant="h3" component="div" align="center" gutterBottom>
        Monitoring Dashboard
      </Typography>

      <div>
      <GenericTable data={jsonData} customColumns={customColumns} title="Tabela de Usuários" />
    </div>
      {/* Tabela 1
      <Box sx={{ marginBottom: 4 }}>
        <MonitoringTable title="Tabelaspace Crítica" />
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <CriticalDiskTable  title="Critical Disk"  />
      </Box> */}
    </Box>
  );
};

export default Monitoring;
