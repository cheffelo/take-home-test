'use client';

import React, { HTMLAttributes } from "react";
import { useGetBasketQuery } from "../store/services/basket";

const Basket: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { data = [] } = useGetBasketQuery();

  const handleRemoveFromBasket = (productId: string) => {
    // Implement me
  };

  return (
    <div {...props}>
      <strong>Basket</strong>
      <ul>
        {data.map((product) => (
          <li className="flex justify-around gap-8" key={product.productId}>
            <span>{product.productName}</span>
            <button onClick={() => handleRemoveFromBasket(product.productId)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
