import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/axios';
import { mockAuthService } from '../services/mockAuth';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      // Use mock service in development
      const userData = process.env.NODE_ENV === 'development'
        ? await mockAuthService.getCurrentUser()
        : (await api.get('/auth/me')).data;

      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      localStorage.removeItem('token');
      navigate('/login');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const login = async (credentials) => {
    try {
      // Use mock service in development
      const response = process.env.NODE_ENV === 'development'
        ? await mockAuthService.login(credentials)
        : await api.post('/auth/login', credentials);

      const { token, user } = process.env.NODE_ENV === 'development'
        ? response
        : response.data;

      localStorage.setItem('token', token);
      setUser(user);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  };

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    setUser,
    checkAuth
  };
};

export default useAuth; 