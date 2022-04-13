// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

import products from "../../data/products.json";

import { APIError, Product } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | APIError>
) {
  res.status(200).json(products as Product[]);
}
