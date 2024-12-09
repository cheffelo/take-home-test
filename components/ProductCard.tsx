'use client';

import { HTMLAttributes } from "react";

import { Product } from "../types";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="border-2 ">Product card</div>
);

export default ProductCard;
