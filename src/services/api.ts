import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log('API Debug - Token from localStorage:', token ? 'Token exists' : 'No token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('API Debug - Authorization header set:', config.headers.Authorization);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log('API Debug - Response error:', error.response?.status, error.response?.data);
    if (error.response?.status === 401) {
      console.log('API Debug - 401 Unauthorized - Clearing token and redirecting');
      // Remove invalid token
      localStorage.removeItem('token');
      
      // Dispatch a custom event that AuthContext can listen to
      window.dispatchEvent(new CustomEvent('auth:logout'));
      
      // Redirect to login if not already there
      if (window.location.pathname !== '/login') {
        console.log('API Debug - Redirecting to login page');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
