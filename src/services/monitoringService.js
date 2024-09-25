import apiService from './apiService'; // Supondo que apiService já esteja configurado com axios.

const monitoringService = {
  getProcedures: async () => {
    try {
      const response = await apiService.get('/monitoring/preventive/procedures');
      return response; // Retorna o array de procedimentos.
    } catch (error) {
      console.error('Erro ao obter procedimentos:', error);
      throw error;
    }
  },

  getErros: async () => {
    try {
      const response = await apiService.get('/monitoring/preventive/erros');
      console.log(response)

      return response; 
    } catch (error) {
      console.error('Erro ao obter os erros:', error);
      throw error;
    }
  },

  executeProcedure: async (procedure) => {
    try {
      const response = await apiService.get(`/monitoring/preventive/${procedure}`);
      return response; // Retorna os dados da execução da procedure.
    } catch (error) {
      console.error(`Erro ao executar procedimento ${procedure}:`, error);
      throw error;
    }
  },
};

export default monitoringService;
