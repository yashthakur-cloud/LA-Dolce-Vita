import api from './api';

export const createRazorpayOrder = async (amount) => {
  const res = await api.post('/payment/create-order', { amount });
  return res.data;
};

export const verifyPayment = async (paymentData) => {
  const res = await api.post('/payment/verify', paymentData);
  return res.data;
};