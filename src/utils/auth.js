export const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Retorna true se o token existir
  };
  