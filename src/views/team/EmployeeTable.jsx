import React, { useState, useEffect } from 'react';
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
  Avatar,
  Select,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';
import userService from 'services/userService'; // Importa o userService

// Estilo para o cabeçalho da tabela
const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  textAlign: 'center',
  padding: '16px',
}));

// Estilo para o container da tabela com bordas arredondadas e rolagem customizada
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  width: '70vw',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '2px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '2px',
  },
}));

const EmployeeTable = ({ employees, isAdmin, onUpdate }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [filter, setFilter] = useState('');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [roles, setRoles] = useState([]); // Estado para armazenar os possíveis roles

  useEffect(() => {
    // Busca os roles disponíveis
    const fetchRoles = async () => {
      try {
        const rolesList = await userService.getUsersRoles();
        setRoles(rolesList);
      } catch (error) {
        console.error('Erro ao buscar roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleDelete = (employee) => {
    setEmployeeToDelete(employee);
    setOpenDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await userService.deleteUser(employeeToDelete.id);
      onUpdate(); // Atualiza a lista de funcionários
    } catch (error) {
      console.error('Erro ao deletar funcionário:', error);
    }
    setOpenDeleteModal(false);
  };

  const handleEdit = (employee) => {
    setEmployeeToEdit(employee);
    setOpenEditModal(true);
  };

  const handleSaveEdit = (updatedEmployee) => {
    onUpdate(); // Atualiza a lista de funcionários
    setOpenEditModal(false);
  };

  const handleRoleChange = async (employee, newRole) => {
    try {
      await userService.updateUserRole(employee.id, newRole);
      onUpdate(); // Atualiza a lista de funcionários
    } catch (error) {
      console.error('Erro ao atualizar role:', error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Função para ordenar os dados
  const sortedEmployees = (employees) => {
    return employees.sort((a, b) => {
      if (orderBy === 'name') {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return order === 'asc' ? a.id - b.id : b.id - a.id;
      }
    });
  };

  // Filtra e ordena os funcionários
  const filteredEmployees = sortedEmployees(
    employees.filter((employee) =>
      employee.name.toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
              display: { xs: 'none', sm: 'inline-flex' },
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
                <StyledTableHeaderCell>Foto</StyledTableHeaderCell>
                <StyledTableHeaderCell>
                  <TableSortLabel
                    active={orderBy === 'id'}
                    direction={orderBy === 'id' ? order : 'asc'}
                    onClick={() => handleSortRequest('id')}
                    sx={{
                      color: 'white',
                      '& .MuiTableSortLabel-icon': {
                        color: 'white !important',
                        position: 'absolute',
                        right: '-20px',
                      },
                      '&:hover': {
                        color: 'white',
                      },
                      '&.Mui-active': {
                        color: 'white',
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
                      color: 'white',
                      '& .MuiTableSortLabel-icon': {
                        color: 'white !important',
                        position: 'absolute',
                        right: '-20px',
                      },
                      '&:hover': {
                        color: 'white',
                      },
                      '&.Mui-active': {
                        color: 'white',
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
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      alt={employee.name}
                      src={employee.photo || 'https://via.placeholder.com/150'}
                      sx={{ width: 60, height: 60 }} // Tamanho do avatar
                    />
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{employee.id}</TableCell>
                  <TableCell sx={{ textAlign: 'left' }}>
                    <Box>
                      <Typography sx={{ marginBottom: '0.2rem' }}>{employee.name}</Typography> {/* Espaço entre nome e email */}
                      <Typography sx={{ fontSize: '0.8rem' }}>{employee.email}</Typography> {/* Tamanho da fonte menor */}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{employee.phone}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{employee.birthday}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    {isAdmin ? (
                      <Select
                        value={employee.role}
                        onChange={(event) => handleRoleChange(employee, event.target.value)}
                        sx={{ width: 150 }} // Define a largura fixa do dropdown
                      >
                        {roles.map((role) => (
                          <MenuItem key={role} value={role} sx={{ minWidth: 150 }}>
                            {role}
                          </MenuItem>
                        ))}
                      </Select>
                    ) : (
                      employee.role
                    )}
                  </TableCell>
                  {isAdmin && (
                    <TableCell sx={{ textAlign: 'center' }}>
                      <IconButton color="primary" onClick={() => handleEdit(employee)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(employee)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
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
    </Box>
  );
};

export default EmployeeTable;
