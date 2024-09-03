// src/services/authService.js

import apiService from './apiService';
import AuthModel from '../models/authModel';

// Função para salvar tokens e outros dados no local storage
const saveTokens = (token, name, email, id, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('userId', id);
  localStorage.setItem('role', role);
};

// Função para remover tokens e outros dados do local storage
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  localStorage.removeItem('userId');
  localStorage.removeItem('role');
};

// Função para fazer login
const login = async (dto) => {
  try {
    const response = await apiService.post('/auth', dto);
    if (response && response.accessToken) {
      saveTokens(
        response.accessToken,
        response.user.name,
        response.user.email,
        response.user.id,
        response.user.role
      );
      return AuthModel.fromJson(response);
    }
    return null;
  } catch (error) {
    console.error('Failed to login:', error);
    throw error;
  }
};

const AuthService = {
  login,
  logout,
};

export default AuthService;
