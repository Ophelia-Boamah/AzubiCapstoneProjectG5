import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import api from '../utils/auth/api';

//api here is an axios instance

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token.token}`;
        const user = token;
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (params) => {
    try {
      const { data: token } = await api.post('api/login/', params);
      if (token) {
        Cookies.set('token', token, { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${token.token}`;
        setUser(token);
        router.push('/events');
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const register = async (params) => {
    try {
      const res = await api.post('api/register/', params);
      console.log(res);
      router.push('/signin');
    } catch (error) {
      throw new Error(error);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    router.push = '/';
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        loading,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
