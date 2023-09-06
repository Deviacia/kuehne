import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ordersApi } from '../api/ordersApi';
import { type Order } from './types';

type OrdersSliceState = {
  orders: Order[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string;
};

export const fetchOrders = createAsyncThunk<Order[]>(
  'orders/fetchOrders',
  ordersApi,
);

const initialState: OrdersSliceState = {
  orders: [],
  status: 'idle',
  error: null,
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = state.orders.concat(action.payload);
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

// export const {} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
