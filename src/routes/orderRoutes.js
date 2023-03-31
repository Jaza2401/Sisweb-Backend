import { Router } from 'express';
import {createOrder, getAllOrders, getOrderById, deleteOrder, updateOrder}
from '../controllers/orderControler';

const orderRouter = Router();

orderRouter.get('/', getAllOrders);
orderRouter.get('/:id', getOrderById);
orderRouter.post('/', createOrder);
orderRouter.patch('/:id', updateOrder);
orderRouter.delete('/', deleteOrder);

export default orderRouter;