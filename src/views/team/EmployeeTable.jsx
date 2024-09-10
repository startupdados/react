import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EmployeeRow from './EmployeeRow';
import EditEmployeeModal from './EditEmployeeModal';
import { padding, styled } from '@mui/system';

// Estilo para o cabeçalho da tabela
const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Fundo azul
  color: 'white', // Texto branco
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '16px',
}));

// Estilo para o container da tabela com bordas arredondadas e rolagem customizada
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '12px', // Bordas arredondadas no container da tabela
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Sombra suave
  maxHeight: '100vh',
  overflowY: 'auto', // Scroll vertical
  '&::-webkit-scrollbar': {
    width: '2px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.light, // Customiza a cor da barra de rolagem
    borderRadius: '2px',
  },
}));

const EmployeeTable = ({ employees, isAdmin }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [filter, setFilter] = useState('');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleDelete = (employee) => {
    setEmployeeToDelete(employee);
    setOpenDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deletando o funcionário: ${employeeToDelete.name}`);
    setOpenDeleteModal(false);
  };

  const handleEdit = (employee) => {
    setEmployeeToEdit(employee);
    setOpenEditModal(true);
  };

  const handleSaveEdit = (updatedEmployee) => {
    console.log('Atualizando funcionário:', updatedEmployee);
    setOpenEditModal(false);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/* Filtro de texto e botão de cadastrar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          placeholder="Filtrar por nome"
          variant="outlined"
          value={filter}
          onChange={handleFilterChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ flex: 1, marginRight: '10px' }}
        />

        {/* Botão de Cadastrar */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{
            whiteSpace: 'nowrap',
            padding: '10px 20px',
            display: { xs: 'none', sm: 'inline-flex' }, // Mostra o texto completo em telas maiores
          }}
          onClick={() => console.log('Cadastrar novo integrante')}
        >
          Cadastrar Novo Integrante
        </Button>

        {/* Ícone + para telas pequenas */}
        <IconButton
          color="primary"
          sx={{ display: { xs: 'inline-flex', sm: 'none' }, marginLeft: '10px' }}
          onClick={() => console.log('Cadastrar novo integrante')}
        >
          <AddIcon />
        </IconButton>
      </Box>

      <StyledTableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableHeaderCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSortRequest('id')}
                  sx={{
                    color: 'white', // Mantém o texto branco
                    '& .MuiTableSortLabel-icon': {
                      color: 'white !important', // Ícone de ordenação branco
                      position: 'absolute', // Ícone flutuando ao lado
                      right: '-22px', // Ajusta o ícone para flutuar 20px ao lado
                    },
                    '&:hover': {
                      color: 'white', // Mantém o texto branco ao passar o mouse
                    },
                    '&.Mui-active': {
                      color: 'white', // Mantém o texto branco ao ser ativo
                    },
                  }}
                >
                  ID
                </TableSortLabel>
              </StyledTableHeaderCell>
              <StyledTableHeaderCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleSortRequest('name')}
                  sx={{
                    color: 'white', // Mantém o texto branco
                    '& .MuiTableSortLabel-icon': {
                      color: 'white !important', // Ícone de ordenação branco
                      position: 'absolute', // Ícone flutuando ao lado
                      right: '-20px', // Ajusta o ícone para flutuar 20px ao lado
                    },
                    '&:hover': {
                      color: 'white', // Mantém o texto branco ao passar o mouse
                    },
                    '&.Mui-active': {
                      color: 'white', // Mantém o texto branco ao ser ativo
                    },
                  }}
                >
                  Nome e Email
                </TableSortLabel>
              </StyledTableHeaderCell>
              <StyledTableHeaderCell>Telefone</StyledTableHeaderCell>
              <StyledTableHeaderCell>Aniversário</StyledTableHeaderCell>
              <StyledTableHeaderCell>Cargo</StyledTableHeaderCell>
              {isAdmin && <StyledTableHeaderCell>Ações</StyledTableHeaderCell>}
            </TableRow>
          </TableHead>
          <TableBody >
            {filteredEmployees.map((employee, index) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                isAdmin={isAdmin}
                onEdit={handleEdit}
                onDelete={handleDelete}
                index={index} // Passando o índice para alternar cores
              />
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {/* Modal de confirmação de exclusão */}
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: '24px' }}>
            Deseja confirmar a exclusão?
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirmDelete}
            fullWidth
            sx={{ fontSize: '18px' }}
          >
            CONFIRMAR
          </Button>
        </Box>
      </Modal>

      {/* Modal de edição */}
      {employeeToEdit && (
        <EditEmployeeModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          employee={employeeToEdit}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
