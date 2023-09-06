import { Order } from '../..';

interface Props {
  order: Order;
}

export const OrderItem = ({ order }: Props) => {
  return (
    <>
      <td>{order.orderNo}</td>
      <td>{order.date}</td>
      <td>{order.customer}</td>
      <td>{order.trackingNo}</td>
      <td>{order.status}</td>
      <td>{order.consignee}</td>
    </>
  );
};
