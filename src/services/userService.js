import apiService from './apiService';

const userService = {
  // Método para criar um novo usuário
  createUser: async (data) => {
    const response = await apiService.post('/users', data);
    return response;
  },

  // Método para obter todos os usuários
  getUsers: async () => {
    const response = await apiService.get('/users');
    return response;
  },

  // Método para obter um usuário pelo ID
  getUserById: async (id) => {
    const response = await apiService.get(`/users/${id}`);
    return response;
  },

  // Método para atualizar um usuário
  updateUser: async (id, data) => {
    const response = await apiService.patch(`/users/${id}`, data);
    return response;
  },

  // Método para deletar um usuário
  deleteUser: async (id) => {
    await apiService.delete(`/users/${id}`);
  },

  // Método para atualizar o papel de um usuário
  updateUserRole: async (id, role) => {
    const response = await apiService.patch(`/users/${id}/role`, { role });
    return response;
  },

  // Método para obter todos os usuários e seus papéis
  getUsersRoles: async () => {
    const response = await apiService.get('/users/roles');
    return response;
  }
};

export default userService;
