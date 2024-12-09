import { NextResponse } from "next/server";
import { Product } from "../../../types";
import products from "../../../data/products.json";

export function GET() {
    try {
        return NextResponse.json(products as Product[], { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
