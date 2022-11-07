import IOrder from '../interfaces/order.interface';
import OrderModel from '../models/order.model';

export default class OrderService {
  productModel = new OrderModel();

  async getAll():Promise<IOrder[]> {
    const products = await this.productModel.getAll();
    return products;
  }
}