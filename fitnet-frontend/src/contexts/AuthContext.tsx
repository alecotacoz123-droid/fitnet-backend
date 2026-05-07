// src/contexts/AuthContext.tsx

import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

// =========================
// Types
// =========================

interface IUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  register: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;

  logout: () => void;

  isAuthenticated: boolean;
}

// =========================
// Context
// =========================

export const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

// =========================
// API
// =========================

const API_URL = 'http://localhost:5000/api';

// =========================
// Provider
// =========================

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  const [isLoading, setIsLoading] =
    useState<boolean>(true);

  // =========================
  // Load saved session
  // =========================

  useEffect(() => {
    const token =
      localStorage.getItem('token');

    const savedUser =
      localStorage.getItem('user');

    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error(
          'Error al cargar usuario:',
          error
        );

        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }

    setIsLoading(false);
  }, []);

  // =========================
  // Login
  // =========================

  const login = async (
    email: string,
    password: string
  ) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/auth/login`,
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            'Error al iniciar sesión'
        );
      }

      if (data.user && data.token) {
        setUser(data.user);

        localStorage.setItem(
          'token',
          data.token
        );

        localStorage.setItem(
          'user',
          JSON.stringify(data.user)
        );
      } else {
        throw new Error(
          'Respuesta inválida del servidor'
        );
      }
    } catch (error) {
      console.error(
        'Login error:',
        error
      );

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // Register
  // =========================

  const register = async (
    email: string,
    password: string,
    name: string
  ) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/auth/register`,
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            email,
            password,
            name,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            'Error al registrarse'
        );
      }

      if (data.user && data.token) {
        setUser(data.user);

        localStorage.setItem(
          'token',
          data.token
        );

        localStorage.setItem(
          'user',
          JSON.stringify(data.user)
        );
      } else {
        throw new Error(
          'Respuesta inválida del servidor'
        );
      }
    } catch (error) {
      console.error(
        'Register error:',
        error
      );

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // Logout
  // =========================

  const logout = () => {
    setUser(null);

    localStorage.removeItem('token');

    localStorage.removeItem('user');
  };

  // =========================
  // Provider
  // =========================

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}