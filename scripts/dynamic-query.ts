// /api/todos
// /api/todos?done=false
// /api/todos?done=true

import { and, eq } from "drizzle-orm";
import { db } from "../src/db/drizzle";
import { todo } from "../src/db/schema";

const isDone = false; // or true or undefined

try {
  const query = db.select().from(todo).where(eq(todo.userId, 1));
  const dynamicQuery = query.$dynamic();

  if (typeof isDone === "boolean") {
    dynamicQuery.where(and(eq(todo.done, isDone), eq(todo.userId, 1)));
  }

  const todos = await dynamicQuery;

  console.log(todos);
} catch (error) {
  console.error("Error reading todos", error);
  process.exit(1);
}
