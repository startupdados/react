import apiService from './apiService';

const clientService = {
  // Método para obter todos os clientes
  getAllClients: async () => {
    const response = await apiService.get('/clients');
    return response;
  },

  // Método para obter um cliente pelo ID
  getClientById: async (id) => {
    const response = await apiService.get(`/clients/${id}`);
    return response;
  },
};

export default clientService;
