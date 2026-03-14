import React, { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// API functions
const fetchUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await api.get('/auth/me');
  return response.data.user;
};

const loginUser = async ({ email, password }) => {
  const response = await api.post('/auth/login', { email, password });
  const { token, user } = response.data;
  localStorage.setItem('token', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return user;
};

const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  const { token, user } = response.data;
  localStorage.setItem('token', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return user;
};

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Use React Query for user data - automatically caches and refetches
  const { data: user, isLoading: loading, error } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    retry: false,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
    refetchOnWindowFocus: true, // Refetch when window gains focus
    refetchOnMount: true, // Always refetch on mount
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
    },
  });

  // Login function
  const login = async (email, password) => {
    try {
      const user = await loginMutation.mutateAsync({ email, password });
      return { success: true, user };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Login failed' 
      };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const user = await registerMutation.mutateAsync(userData);
      return { success: true, user };
    } catch (error) {
      const validationErrors = error.response?.data?.details;
      if (validationErrors && Array.isArray(validationErrors)) {
        const firstError = validationErrors[0];
        return { 
          success: false, 
          error: `${firstError.field}: ${firstError.message}` 
        };
      }
      return { 
        success: false, 
        error: error.response?.data?.error || error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    queryClient.setQueryData(['user'], null);
    queryClient.clear();
  };

  // Update user data - invalidates cache to trigger refetch
  const updateUser = async (updatedUser) => {
    if (updatedUser) {
      // If specific user data is provided, merge it with cached user
      queryClient.setQueryData(['user'], (old) => old ? { ...old, ...updatedUser } : updatedUser);
    } else {
      // Fetch fresh user data from server
      await queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  };

  // Refresh user data from server
  const refreshUser = async () => {
    await queryClient.invalidateQueries({ queryKey: ['user'] });
  };

  const value = {
    user: user || null,
    loading,
    error,
    login,
    register,
    logout,
    updateUser,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
