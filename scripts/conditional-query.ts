import { and, eq } from "drizzle-orm";
import { db } from "../src/db/drizzle";
import { todo } from "../src/db/schema";

const isDone = undefined; // or true or false

try {
  const todos = await db
    .select()
    .from(todo)
    .where(
      and(
        eq(todo.userId, 1),
        typeof isDone === "boolean" ? eq(todo.done, isDone) : undefined
      )
    );

  console.log(todos);
} catch (error) {
  console.error("Error reading todos", error);
  process.exit(1);
}
