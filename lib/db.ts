import { Low, JSONFile } from "lowdb";
import { join } from "path";
import { Product } from "../types";

type Data = Product[];

export const devdb = () => {
  const adapter = new JSONFile<Data>(join(process.cwd() + "/data/db.json"));
  const database = new Low(adapter);

  return database;
};
