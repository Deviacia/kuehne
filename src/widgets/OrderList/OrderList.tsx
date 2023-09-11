import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { DeleteOrderButton } from '@/features/order/delete';
import { ShowDetailsButton } from '@/features/order/details';
import { OrderItem, type Order, fetchOrders } from '@/entities/order';
import { useAppDispatch, useAppSelector } from '@/shared';

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
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!orders
          ? null
          : orders.map((order) => (
              <OrderItem
                key={order.orderNo}
                order={order}
                actionSlot={
                  <>
                    <DeleteOrderButton order={order} />
                    <ShowDetailsButton order={order} />
                  </>
                }
              />
            ))}
      </tbody>
    </Table>
  );
};
