'use client';

import React, { HTMLAttributes } from "react";

import { Product } from "../types";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div>Product card</div>
);

export default ProductCard;
