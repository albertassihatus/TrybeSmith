import express from 'express';
import OrderController from '../controllers/order.controller';

const router = express.Router();
const order = new OrderController();

router.route('/')
  .get((req, res) => order.getAll(req, res));

export default router;