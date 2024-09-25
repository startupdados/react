import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import EmployeeTable from './EmployeeTable';
import userService from 'services/userService'; // Certifique-se de que o caminho está correto
import authService from 'services/authService';

const TeamPage = () => {
  const [employees, setEmployees] = useState([]); // Estado para armazenar os usuários
  const [isAdmin, setIsAdmin] = useState(false); // Estado para verificar se é admin
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const userInfo = authService.getUserInfo();

  // useEffect para verificar a role do usuário no localStorage
  useEffect(() => {
    setIsAdmin(userInfo.role === 'admin'); // Verifica se a role é 'admin'
  }, []);

  // Função para buscar os usuários
  const fetchUsers = async () => {
    setLoading(true); // Inicia o carregamento
    try {
      const response = await userService.getUsers();
      
      // Mapeia os dados para o formato esperado pela tabela
      const formattedUsers = response.map((user) => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phone,
        birthday: new Date(user.birthDate).toLocaleDateString('pt-BR'), // Converte a data para o formato 'DD/MM/AAAA'
        role: user.role,
        photo: user.photo || 'https://via.placeholder.com/150', // Imagem padrão caso a foto seja nula
      }));

      setEmployees(formattedUsers);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // useEffect para buscar os usuários ao montar o componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Typography variant="h1" sx={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        Equipe
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <EmployeeTable employees={employees} isAdmin={isAdmin} onUpdate={fetchUsers} />
      )}
    </div>
  );
};

export default TeamPage;
