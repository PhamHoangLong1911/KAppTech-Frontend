import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';
import { authService } from '../services/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = authService.getToken();
      console.log('Auth Debug - Stored token on init:', storedToken ? 'Token exists' : 'No token');
      if (storedToken) {
        setToken(storedToken);
        try {
          console.log('Auth Debug - Attempting to get current user...');
          const response = await authService.getCurrentUser();
          console.log('Auth Debug - getCurrentUser response:', response);
          if (response.success) {
            setUser(response.data.user);
          }
        } catch (error) {
          console.error('Auth Debug - Failed to get current user:', error);
          authService.logout();
          setToken(null);
        }
      }
      setIsLoading(false);
    };

    // Listen for logout events from API interceptor
    const handleLogoutEvent = () => {
      console.log('Auth Debug - Logout event received, clearing auth state');
      setUser(null);
      setToken(null);
    };

    window.addEventListener('auth:logout', handleLogoutEvent);

    initializeAuth();

    return () => {
      window.removeEventListener('auth:logout', handleLogoutEvent);
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      console.log('Auth Debug - Login response:', response);
      if (response.success) {
        const { token: newToken, user: userData } = response.data;
        console.log('Auth Debug - Token received:', newToken ? 'Token exists' : 'No token');
        console.log('Auth Debug - User data:', userData);
        authService.setToken(newToken);
        setToken(newToken);
        setUser(userData);
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (error: any) {
      console.error('Auth Debug - Login error:', error);
      throw new Error(error.response?.data?.message || error.message || 'Login failed');
    }
  };

  const register = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
  }) => {
    try {
      const response = await authService.register(userData);
      if (response.success) {
        const { token: newToken, user: newUser } = response.data;
        authService.setToken(newToken);
        setToken(newToken);
        setUser(newUser);
      } else {
        throw new Error(response.message || 'Registration failed');
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message || 'Registration failed');
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setToken(null);
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      const response = await authService.updateProfile(data);
      if (response.success) {
        setUser(response.user);
      } else {
        throw new Error(response.message || 'Profile update failed');
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message || 'Profile update failed');
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
