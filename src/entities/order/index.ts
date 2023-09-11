export { type Order } from './model/types';
export { OrderItem } from './ui/OrderItem/OrderItem';
export { OrderModal } from './ui/OrderModal/OrderModal';
export {
  deleteOrder,
  fetchOrders,
  orderSlice,
  orderReducer,
} from './model/slice.ts';
