import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ordersApi } from '../api/ordersApi';
import { type Order } from './types';

type OrdersSliceState = {
  orders: Order[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string;
};

export const fetchOrders = createAsyncThunk<Order[]>(
  'orders/fetchOrders',
  ordersApi
);

const initialState: OrdersSliceState = {
  orders: [],
  status: 'idle',
  error: null,
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    deleteOrder(state, action: PayloadAction<Order>) {
      state.orders = state.orders.filter(
        (order) => order.orderNo !== action.payload.orderNo
      );
    },
    // editOrder(state, action: PayloadAction<Order>) {
    //   state.orders = state.orders.map((order) => {
    //     if (order.orderNo !== action.payload.orderNo) return order;

    //     return (order = action.payload);
    //   });
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
        state.orders = new Array(6);
      })
      .addCase(
        fetchOrders.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.status = 'succeeded';
          state.orders = action.payload;
        }
      )
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export const { deleteOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
