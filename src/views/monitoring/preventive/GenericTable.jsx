import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Typography,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

// Função auxiliar para ordenar dados
const getComparator = (order, orderBy) => {
  return (a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  };
};

// Componente GenericTable que recebe colunas dinâmicas e dados JSON
const GenericTable = ({ data, customColumns = [], title, onRowMenuClick }) => {
  const theme = useTheme();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(null);

  if (data.length === 0) return <div>Sem dados</div>;

  // Lista de colunas a serem ocultadas apenas visualmente
  const hiddenColumns = ['CHAVE_HASH', 'CHAVE_ID_CLIENTE', 'CHAVE_ID_BANCO', 'CHAVE_TIPO_ALERTA', 'creator', 'responsible', 'callId'];

  // Filtra colunas visíveis (removendo apenas para exibição na tabela)
  const visibleColumns = Object.keys(data[0]).filter((key) => !hiddenColumns.includes(key));

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const StyledTableRow = styled(TableRow)(({ index }) => ({
    backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F0F0F0',
  }));

  const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }));

  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        {title}
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: '80vh', overflow: 'auto' }}>
        <Table stickyHeader sx={{ width: '100%', tableLayout: 'auto' }}>
          <TableHead>
            <TableRow>
              {visibleColumns.map((column) => (
                <StyledTableHeaderCell key={column}>
                  <TableSortLabel
                    active={orderBy === column}
                    direction={orderBy === column ? order : 'asc'}
                    onClick={() => handleSortRequest(column)}
                  >
                    {column}
                  </TableSortLabel>
                </StyledTableHeaderCell>
              ))}
              <StyledTableHeaderCell>Ações</StyledTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .sort(getComparator(order, orderBy))
              .map((row, rowIndex) => (
                <StyledTableRow key={rowIndex} index={rowIndex}>
                  {visibleColumns.map((column) => (
                    <TableCell key={column} align="center">
                      {typeof row[column] === 'object' && row[column] !== null
                        ? JSON.stringify(row[column])
                        : row[column]}
                    </TableCell>
                  ))}
                  <TableCell align="center">
                    <IconButton onClick={() => onRowMenuClick(row)}>
                      <MenuIcon />
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};


export default GenericTable;
