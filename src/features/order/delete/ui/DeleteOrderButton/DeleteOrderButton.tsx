import { Button } from 'react-bootstrap';
import { deleteOrder, type Order } from '@/entities/order';
import { useAppDispatch } from '@/shared';

interface Props {
  order: Order;
}

export const DeleteOrderButton = ({ order }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Button variant="danger" onClick={() => dispatch(deleteOrder(order))}>
      Delete
    </Button>
  );
};
