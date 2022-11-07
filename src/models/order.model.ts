import { RowDataPacket } from 'mysql2';
import connection from './connection';

import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  connection = connection;

  async getAll(): Promise<IOrder[]> {
    const [products] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) AS productsIds
    FROM Trybesmith.Orders AS Orders
    INNER JOIN Trybesmith.Products AS Products
    ON Orders.id = Products.orderId
    GROUP BY Orders.id;`);

    return products;
  }
}