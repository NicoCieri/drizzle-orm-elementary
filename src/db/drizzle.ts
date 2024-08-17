import { config } from "dotenv";
import * as schema from "./schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" }); // or .env.local

const sql = neon(process.env.NEON_DATABASE_URL!);

export const db = drizzle(sql, { schema });
