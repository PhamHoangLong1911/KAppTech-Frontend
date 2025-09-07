import api from './api';
import { User } from '../types';

export const authService = {
  // Login user
  async login(email: string, password: string) {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  // Register user
  async register(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
  }) {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  // Get current user
  async getCurrentUser() {
    const response = await api.get('/auth/me');
    return response.data;
  },

  // Update user profile
  async updateProfile(userData: Partial<User>) {
    const response = await api.put('/auth/profile', userData);
    return response.data;
  },

  // Logout (client-side)
  logout() {
    localStorage.removeItem('token');
  },

  // Get token from localStorage
  getToken() {
    return localStorage.getItem('token');
  },

  // Set token in localStorage
  setToken(token: string) {
    localStorage.setItem('token', token);
  },
};
