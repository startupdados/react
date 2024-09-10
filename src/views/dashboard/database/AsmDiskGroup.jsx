import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TableSortLabel, useTheme } from '@mui/material';

// Dados fictícios para a tabela
const initialAsmDiskData = [
  { dataColeta: '2024-09-01 13:06:27', grupo: 'DATA', state: 'MOUNTED', type: 'EXTERNAL', espacoLivre: 100, offlineDisks: 0 },
  { dataColeta: '2024-09-02 13:06:27', grupo: 'FRA', state: 'DISMOUNTED', type: 'EXTERNAL', espacoLivre: 50, offlineDisks: 2 },
  { dataColeta: '2024-09-03 13:06:27', grupo: 'OCR', state: 'MOUNTED', type: 'NORMAL', espacoLivre: 80, offlineDisks: 1 }
];

// Função para comparar valores
const descendingComparator = (a, b, orderBy) => {
  if (orderBy === 'dataColeta') {
    return new Date(b[orderBy]) - new Date(a[orderBy]);
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

// Função para definir o comparador com base na ordem
const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const AsmDiskGroup = ({ title }) => {
  const theme = useTheme();
  const [asmDiskData, setAsmDiskData] = useState(initialAsmDiskData);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  // Função para manipular a ordenação
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    const sortedData = asmDiskData.sort(getComparator(order, property));
    setAsmDiskData([...sortedData]);
  };

  const headCells = [
    { id: 'dataColeta', label: 'DATA COLETA' },
    { id: 'grupo', label: 'GRUPO' },
    { id: 'state', label: 'STATE' },
    { id: 'type', label: 'TYPE' },
    { id: 'espacoLivre', label: 'ESPAÇO LIVRE (GB)' },
    { id: 'offlineDisks', label: 'OFFLINE DISKS' }
  ];

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h4" component="div" align="center">{title} ASM DiskGroup</Typography>}
      />
      <CardContent>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell 
                    key={headCell.id} 
                    align="center"
                    sortDirection={orderBy === headCell.id ? order : false}
                    sx={{ backgroundColor: theme.palette.primary.main, color: 'white' }} // Cabeçalho com primary.main e texto branco
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={(e) => handleRequestSort(e, headCell.id)}
                      hideSortIcon={!orderBy} // Esconde o ícone quando não está ativo
                      sx={{
                        color: 'white',
                        '&:hover': {
                          color: 'white', // Mantém o texto branco no hover
                        },
                        '&.Mui-active': {
                          color: 'white', // Mantém o texto branco ao ser selecionado
                        },
                        '& .MuiTableSortLabel-icon': {
                          position: 'absolute',
                          right: '-25px', // Ajusta a posição para ficar ao lado do texto
                          zIndex: 2,
                          opacity: orderBy === headCell.id ? 1 : 0,
                          color: 'white !important' // Mantém o ícone de ordenação branco
                        }
                      }}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {asmDiskData.map((disk, index) => (
                <TableRow 
                  key={index} 
                  sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }} // Linhas alternadas (par: branco, ímpar: cinza claro)
                >
                  <TableCell align="center">{disk.dataColeta}</TableCell>
                  <TableCell align="center">{disk.grupo}</TableCell>
                  <TableCell align="center">{disk.state}</TableCell>
                  <TableCell align="center">{disk.type}</TableCell>
                  <TableCell align="center">{disk.espacoLivre}</TableCell>
                  <TableCell align="center">{disk.offlineDisks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default AsmDiskGroup;
