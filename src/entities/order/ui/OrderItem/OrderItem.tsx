import type { ReactNode } from 'react';
import type { Order } from '../../model/types';
import styles from './OrderItem.module.css';

interface Props {
  order: Order;
  actionSlot?: ReactNode;
}

export const OrderItem = ({ order, actionSlot }: Props) => {
  return (
    <tr>
      <td>{order.orderNo}</td>
      <td>{order.date}</td>
      <td>{order.customer}</td>
      <td>{order.trackingNo}</td>
      <td>{order.status}</td>
      <td>{order.consignee}</td>
      {actionSlot ? (
        <td>
          <div className={styles.actions}>{actionSlot}</div>
        </td>
      ) : null}
    </tr>
  );
};
