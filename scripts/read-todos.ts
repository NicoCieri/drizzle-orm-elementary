import { db } from "../src/db/drizzle";
import { todo } from "../src/db/schema";

try {
  const todos = await db.select().from(todo);
  console.log(todos);
} catch (error) {
  console.error("Error reading todos", error);
  process.exit(1);
}
