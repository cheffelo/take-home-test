import { NextRequest, NextResponse } from "next/server";
import { APIError, Product } from "../../../types";
import { devdb } from "../../../lib/db";
import { Low } from "lowdb";

let database: Low<Product[]> | null = null;

async function initDatabase() {
    if (process.env.NODE_ENV === "development") {
        database = devdb();
        await database.read();
    }
}

// GET method
export async function GET() {
    await initDatabase();

    if (!database || !database.data) {
        return NextResponse.json(
            { status: 502, message: "Database not available" } as APIError,
            { status: 502 }
        );
    }

    return NextResponse.json(database.data, { status: 200 });
}

// POST method
export async function POST(req: NextRequest) {
    await initDatabase();

    if (!database || !database.data) {
        return NextResponse.json(
            { status: 502, message: "Database not available" } as APIError,
            { status: 502 }
        );
    }

    try {
        const body = await req.json();
        database.data = body;
        await database.write();
        return NextResponse.json(database.data, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { status: 500, message: "Failed to save data" } as APIError,
            { status: 500 }
        );
    }
}
