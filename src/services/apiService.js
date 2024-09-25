import axios from 'axios';

class ApiService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Intercepta a requisição para adicionar o token de autorização
    this.api.interceptors.request.use(
      async (config) => {
        const token = await this._getToken();
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // Método para obter o token (pode ser adaptado conforme sua implementação de autenticação)
  async _getToken() {
    return localStorage.getItem('token');
  }

  // Método para processar respostas de forma unificada
  _processResponse(response) {
    return response.data;
  }

  // Método para tratar erros
  _handleError(error) {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 400:
          return Promise.reject('Bad Request: ' + data.message);
        case 401:
          return Promise.reject('Unauthorized: ' + data.message);
        case 403:
          return Promise.reject('Forbidden: ' + data.message);
        case 404:
          return Promise.reject('Not Found: ' + data.message);
        case 500:
          return Promise.reject('Server Error: ' + data.message);
        default:
          return Promise.reject(`Error ${status}: ${data.message}`);
      }
    } else if (error.request) {
      return Promise.reject('No response received from server.');
    } else {
      return Promise.reject('Error in setting up the request: ' + error.message);
    }
  }

  // Método GET
  async get(endpoint, params = {}) {
    try {
      const response = await this.api.get(endpoint, { params });
      return this._processResponse(response);
    } catch (error) {
      throw await this._handleError(error);
    }
  }

  // Método POST
  async post(endpoint, data) {
    try {
      const response = await this.api.post(endpoint, data);
      return this._processResponse(response);
    } catch (error) {
      throw await this._handleError(error);
    }
  }

  // Método PUT
  async put(endpoint, data) {
    try {
      const response = await this.api.put(endpoint, data);
      return this._processResponse(response);
    } catch (error) {
      throw await this._handleError(error);
    }
  }

  // Método PATCH
  async patch(endpoint, data) {
    try {
      const response = await this.api.patch(endpoint, data);
      return this._processResponse(response);
    } catch (error) {
      throw await this._handleError(error);
    }
  }

  // Método DELETE
  async delete(endpoint) {
    try {
      const response = await this.api.delete(endpoint);
      return this._processResponse(response);
    } catch (error) {
      throw await this._handleError(error);
    }
  }
}

// Instância única do ApiService
const apiService = new ApiService(import.meta.env.VITE_BASE_URL);

export default apiService;
