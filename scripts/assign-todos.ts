import { SingleBar, Presets } from "cli-progress";
import { eq } from "drizzle-orm";
import { db } from "../src/db/drizzle";
import { todo } from "../src/db/schema";

const total = 10;
const progressBar = new SingleBar({}, Presets.shades_classic);

progressBar.start(total, 0);

try {
  const todos = await db.query.todo.findMany({ limit: total });

  for (const t of todos) {
    await db.update(todo).set({ userId: 1 }).where(eq(todo.id, t.id));
    progressBar.increment();
  }
  progressBar.stop();
  console.log("Todos assigned successfully");
} catch (error) {
  progressBar.stop();
  console.error("Error assigning todos", error);
  process.exit(1);
}
