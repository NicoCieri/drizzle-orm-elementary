import { db } from "../src/db/drizzle";

try {
  const todos = await db.query.todo.findMany();
  console.log(todos);

  const todo = await db.query.todo.findFirst();
  console.log(todo);
} catch (error) {
  console.error("Error reading todos", error);
  process.exit(1);
}
