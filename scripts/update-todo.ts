import { eq } from "drizzle-orm";
import { db } from "../src/db/drizzle";
import { todo } from "../src/db/schema";

try {
  await db.update(todo).set({ done: true }).where(eq(todo.id, 400));
  console.log("Todos updated successfully");
} catch (error) {
  console.error("Error updating todos", error);
  process.exit(1);
}
