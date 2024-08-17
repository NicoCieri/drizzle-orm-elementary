import "dotenv/config";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "../src/db/drizzle";

try {
  await migrate(db, { migrationsFolder: "./migrations" });
  console.log("Migrations ran successfully");
} catch (error) {
  console.error("Error running migrations", error);
  process.exit(1);
}
