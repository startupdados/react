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
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

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
const GenericTable = ({ data, customColumns = [], title }) => {
  const theme = useTheme();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(null);

  if (data.length === 0) return <div>Sem dados</div>;

  const columns = Object.keys(data[0]).concat(customColumns.map(col => col.id));

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
    textAlign: 'center',  // Alinhamento centralizado
  }));

  const getMaxWidth = (key) => {
    const maxLength = Math.max(...data.map((item) => String(item[key]).length), key.length);
    return `${maxLength + 1}ch`;
  };

  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        {title}
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: '80vh', overflow: 'auto' }}>
        <Table stickyHeader sx={{ width: '100%', tableLayout: 'auto' }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                const isCustom = customColumns.some(col => col.id === column);
                if (isCustom) {
                  return (
                    <StyledTableHeaderCell key={column} sx={{ minWidth: '10ch' }}>
                      {customColumns.find(col => col.id === column).label}
                    </StyledTableHeaderCell>
                  );
                }
                return (
                  <StyledTableHeaderCell
                    key={column}
                    sortDirection={orderBy === column ? order : false}
                    sx={{ minWidth: getMaxWidth(column) }}
                  >
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? order : 'asc'}
                      onClick={() => handleSortRequest(column)}
                      sx={{
                        color: 'white',  // Mantém o texto branco
                        '& .MuiTableSortLabel-icon': {
                          color: 'white !important',  // Ícone de ordenação branco
                          position: 'absolute',  // Ícone flutua ao lado
                          right: '-22 px',  // Ajusta o ícone para flutuar 15px ao lado
                        },
                        '&:hover': {
                          color: 'white',  // Mantém o texto branco ao passar o mouse
                        },
                        '&.Mui-active': {
                          color: 'white',  // Mantém o texto branco ao ser ativo
                        },
                      }}
                    >
                      {column}
                    </TableSortLabel>
                  </StyledTableHeaderCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .sort(getComparator(order, orderBy))
              .map((row, rowIndex) => (
                <StyledTableRow key={rowIndex} index={rowIndex}>
                  {Object.keys(row).map((column) => (
                    <TableCell key={column} align="center">
                      {row[column]}
                    </TableCell>
                  ))}
                  {customColumns.map((customColumn) => (
                    <TableCell key={customColumn.id} align="center">
                      {customColumn.render(row)}
                    </TableCell>
                  ))}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GenericTable;
