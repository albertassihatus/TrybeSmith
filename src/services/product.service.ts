import IProduct from '../interfaces/product.interface';
import * as ProductModel from '../models/product.model';

export async function create(product: IProduct): Promise<IProduct> {
  const data = await ProductModel.create(product);
  return data;
}

export async function getAll(): Promise<IProduct[]> {
  const products = await ProductModel.getAll();
  return products;
}