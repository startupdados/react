
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

  // Método para obter o token de um local storage ou outra fonte
  async _getToken() {
    // Aqui você pode substituir pelo método que você utiliza para obter o token
    return localStorage.getItem('token');
  }

  // Método para processar respostas de forma unificada
  _processResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return Promise.reject(this._handleError(response));
    }
  }

  // Método para tratar erros
  _handleError(error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          return 'Unauthorized: Authentication is required and has failed.';
        case 403:
          return 'Forbidden: You do not have permission to access this resource.';
        case 404:
          return 'Not found: The requested resource was not found.';
        case 500:
          return error.response.data;
        default:
          return `Failed to load data with status code: ${error.response.status}`;
      }
    } else {
      return 'Network Error: Please check your internet connection.';
    }
  }

  // Método GET
  async get(endpoint) {
    try {
      const response = await this.api.get(endpoint);
      return this._processResponse(response);
    } catch (error) {
      throw this._handleError(error);
    }
  }

  // Método POST
  async post(endpoint, data) {
    try {
      const response = await this.api.post(endpoint, data);
      return this._processResponse(response);
    } catch (error) {
      throw this._handleError(error);
    }
  }

  // Método PUT
  async put(endpoint, data) {
    try {
      const response = await this.api.put(endpoint, data);
      return this._processResponse(response);
    } catch (error) {
      throw this._handleError(error);
    }
  }

  // Método PATCH
  async patch(endpoint, data) {
    try {
      const response = await this.api.patch(endpoint, data);
      return this._processResponse(response);
    } catch (error) {
      throw this._handleError(error);
    }
  }

  // Método DELETE
  async delete(endpoint) {
    try {
      const response = await this.api.delete(endpoint);
      return this._processResponse(response);
    } catch (error) {
      throw this._handleError(error);
    }
  }
}

const apiService = new ApiService(import.meta.env.VITE_BASE_URL);

export default apiService;
