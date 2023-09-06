import { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '@/shared/model/useRedux';
import { OrderItem, type Order } from '@/entities/order';
import { fetchOrders } from '@/entities/order/model/slice';

export const OrderList = () => {
  const dispatch = useAppDispatch();
  const orders: Order[] = useAppSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Table>
      <thead>
        <tr>
          <th>OrderNo</th>
          <th>Date</th>
          <th>Customer</th>
          <th>TrackingNo</th>
          <th>Status</th>
          <th>Consignee</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.orderNo}>
            <OrderItem order={order} />
            <td>btn 1</td>
            <td>btn 2</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
