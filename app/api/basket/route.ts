import {APIError, Product} from "../../../types";
import {devdb} from "../../../lib/db";
import {Low} from "lowdb";

let database: Low<Product[]> | null = null;

async function initDatabase() {
    if (process.env.NODE_ENV === "development") {
        database = devdb();
        await database.read();
    }
}

export async function GET() {
    await initDatabase();

    if (!database || !database.data) {
        return new Response(JSON.stringify({ message: "Database not available" }), {
            status: 502,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify(database.data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(req: Request) {
    await initDatabase();

    if (!database || !database.data) {
        return new Response(JSON.stringify({ message: "Database not available" }), {
            status: 502,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        database.data = await req.json();
        await database.write();

        return new Response(JSON.stringify(database.data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Failed to save data" } as APIError),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
