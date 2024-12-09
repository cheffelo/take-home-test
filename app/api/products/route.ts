
import {APIError, Product} from "../../../types";
import products from "../../../data/products.json";

export function GET() {
    try {

        return new Response(JSON.stringify(products as Product[]), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
        }
    catch (error) {
        return new Response(
            JSON.stringify({ message: "Failed to fetch data" } as APIError),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
