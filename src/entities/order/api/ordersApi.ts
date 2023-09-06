import axios from 'axios';
import { Order } from '../model/types';

export const ordersApi = async () => {
  const response = await axios.get<Order[]>('http://localhost:3000/kuehne', {});
  return response.data;
};
