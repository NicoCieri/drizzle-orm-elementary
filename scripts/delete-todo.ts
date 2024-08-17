import { eq } from "drizzle-orm";
import { db } from "../src/db/drizzle";
import { todo } from "../src/db/schema";

try {
  await db.delete(todo).where(eq(todo.id, 399));
  console.log("Todos deleted successfully");
} catch (error) {
  console.error("Error deleting todos", error);
  process.exit(1);
}
