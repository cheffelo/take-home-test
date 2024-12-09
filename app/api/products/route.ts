import { APIError, Product } from "../../../types";
import products from "../../../data/products.json";
import { NextResponse } from "next/server";

export function GET() {
    try {
        const productList: Product[] = products;
        return NextResponse.json({ data: productList }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch data" } as APIError, {
            status: 500,
        });
    }
}