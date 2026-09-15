import api from './api';

export const registerUser = async (name, email, password, phone) => {
  const res = await api.post('/auth/register', { name, email, password, phone });
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
};