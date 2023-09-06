import { configureStore } from '@reduxjs/toolkit';
import { orderReducer } from './../entities/order/model/slice';

export const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
