import apiService from './apiService';
import { jwtDecode } from 'jwt-decode';

class AuthService {
  // Método para realizar o login
  async login(email, password) {
    try {
      // Faz a requisição POST para o endpoint de login
      const response = await apiService.post('/auth/login', { email, password });

      // Extrai o token da resposta
      const { accessToken } = response;

      // Armazena o token no localStorage
      localStorage.setItem('token', accessToken);

      return true;
    } catch (error) {
      // Trata o erro conforme necessário
      throw error;
    }
  }

  // Método para realizar o logout
  logout() {
    // Remove o token do localStorage
    localStorage.removeItem('token');

    // Remove quaisquer outros dados do usuário
    localStorage.removeItem('userInfo');
    sessionStorage.clear();

    // Se estiver usando um estado global, limpe-o aqui
    // Por exemplo: this.userStore.clearUserData();

    // Redireciona para a página de login
    window.location.href = '/login';
  }

  // Método para verificar se o usuário está autenticado
  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const { exp } = jwtDecode(token);
      if (exp * 1000 < Date.now()) {
        this.logout();
        return false;
      }
      return true;
    } catch (error) {
      this.logout();
      return false;
    }
  }

  // Método para obter informações do usuário a partir do token
  getUserInfo() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decodedToken = jwtDecode(token);
      return {
        name: decodedToken.name,
        lastname: decodedToken.lastname,
        email: decodedToken.email,
        role: decodedToken.role,
        id: decodedToken.id,
        photo: decodedToken.photo,
      };
    } catch (error) {
      this.logout();
      return null;
    }
  }
}

export default new AuthService();
