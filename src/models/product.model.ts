import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/product.interface';
import connection from './connection';

export async function create(product: Product): Promise<Product> {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: insertId, name, amount };
}

export async function getAll(): Promise<Product[]> {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Products',
  );

  return products as Product[];
}