import { NextApiRequest, NextApiResponse } from "next";

import { devdb } from "../../lib/db";

import { APIError, Product } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | APIError>
) {
  let database = null;

  if (process.env.NODE_ENV === "development") {
    database = devdb();
    await database?.read();
  }

  if (!database) {
    return res.status(502).json({
      status: 502,
      message: "Database not available",
    });
  }

  if (req.method === "GET") {
    return res.status(200).json(database.data);
  }

  if (req.method === "POST") {
    database.data = req.body;

    await database.write();

    return res.status(200).json(database.data);
  }
}
