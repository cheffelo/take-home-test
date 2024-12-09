'use client'

import React, { HTMLAttributes } from "react";
import { useGetProductsQuery } from "../store/services/products";

import ProductCard from "./ProductCard";

const ProductList: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    const {data: products} = useGetProductsQuery();
    return (
        <ul {...props}>
            {products?.data.map((product) => (
                <li key={product.productId}>
                    <ProductCard product={product}/>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
