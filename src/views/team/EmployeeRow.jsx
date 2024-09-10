import React from 'react';
import { TableCell, TableRow, Typography, IconButton, FormControl, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';

// Estilo para a linha com bordas arredondadas e alternância de cor
const StyledTableRow = styled(TableRow)(({ theme, index }) => ({
  backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F0F0F0', // Branco e cinza alternados
  borderRadius: '12px',
  marginBottom: '10px',
  border: `1px solid ${theme.palette.grey[300]}`,
  '& > *': {
    borderBottom: 'unset',
  },
  gap: '100px', // Adiciona um gap no topo de cada linha
}));

const EmployeeRow = ({ employee, isAdmin, onEdit, onDelete, index }) => {
  return (
    <StyledTableRow index={index} >
      <TableCell align="center">{employee.id}</TableCell>
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={employee.photo}
            alt={employee.name}
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
          <div>
            <Typography variant="subtitle1">{employee.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {employee.email}
            </Typography>
          </div>
        </div>
      </TableCell>
      <TableCell align="center">{employee.phone}</TableCell>
      <TableCell align="center">{employee.birthday}</TableCell>
      <TableCell align="center">
        {isAdmin ? (
          <FormControl variant="outlined" fullWidth size="small">
            <Select
              value={employee.role}
              onChange={(e) => console.log(`Alterando cargo para: ${e.target.value}`)}
            >
              <MenuItem value="DBA">DBA</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <Typography>{employee.role}</Typography>
        )}
      </TableCell>
      {isAdmin && (
        <TableCell align="center">
          <IconButton onClick={() => onEdit(employee)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={() => onDelete(employee)}>
            <DeleteIcon color="error" />
          </IconButton>
        </TableCell>
      )}
    </StyledTableRow>
  );
};

export default EmployeeRow;