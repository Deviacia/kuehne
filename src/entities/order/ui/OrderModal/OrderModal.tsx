import {
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'react-bootstrap';
import type { Order } from '../../model/types';
import styles from './OrderModal.module.css';

interface Props {
  isOpen: boolean;
  order: Order;
  close: () => void;
}

export const OrderModal = ({ isOpen, order, close }: Props) => {
  return (
    <Modal show={isOpen} onHide={close}>
      <ModalHeader>
        <p>Shipment detail</p>
      </ModalHeader>
      <ModalBody>
        <Form className={styles.form}>
          <div className={styles.col}>
            <FormGroup>
              <Form.Label>orderNo</Form.Label>
              <Form.Control disabled value={order?.orderNo} />
            </FormGroup>
            <FormGroup>
              <Form.Label>customer</Form.Label>
              <Form.Control disabled value={order?.customer} />
            </FormGroup>
            <FormGroup>
              <Form.Label>consignee</Form.Label>
              <Form.Control disabled value={order?.consignee} />
            </FormGroup>
          </div>
          <div className={styles.col}>
            <FormGroup>
              <Form.Label>date</Form.Label>
              <Form.Control disabled value={order?.date} />
            </FormGroup>
            <FormGroup>
              <Form.Label>trackingNo</Form.Label>
              <Form.Control disabled value={order?.trackingNo} />
            </FormGroup>
            <FormGroup>
              <Form.Label>status</Form.Label>
              <Form.Control disabled value={order?.status} />
            </FormGroup>
          </div>
        </Form>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};
