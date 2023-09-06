import { Route, Routes } from 'react-router-dom';
import { OrderPage } from '@/pages/order';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<OrderPage />} />
    </Routes>
  );
};
