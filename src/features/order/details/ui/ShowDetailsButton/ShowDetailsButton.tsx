import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { type Order, OrderModal } from '@/entities/order';
// import { createPortal } from 'react-dom';

interface Props {
  order: Order;
}

export const ShowDetailsButton = ({ order }: Props) => {
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <>
      {modal ? (
        <OrderModal order={order} isOpen={modal} close={handleCloseModal} />
      ) : null}
      <Button variant="primary" onClick={handleOpenModal}>
        Details
      </Button>
    </>
  );
};
