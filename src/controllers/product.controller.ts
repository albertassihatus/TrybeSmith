import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export async function create(req: Request, res: Response) {
  const product = req.body;
  const productCreated = await productService.create(product);
  res.status(201).json(productCreated);
}

export async function getAll(_req: Request, res: Response) {
  const products = await productService.getAll();
  res.status(200).json(products);
}