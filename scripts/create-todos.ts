import { SingleBar, Presets } from "cli-progress";
import { db } from "../src/db/drizzle";
import { todo } from "../src/db/schema";

const total = 100;
const progressBar = new SingleBar({}, Presets.shades_classic);

progressBar.start(total, 0);

try {
  for (let i = 0; i < total; i++) {
    await db.insert(todo).values({
      text: `Todo number ${i + 1}`,
    });
    progressBar.increment();
  }
  progressBar.stop();
  console.log("Todos created successfully");
} catch (error) {
  progressBar.stop();
  console.error("Error creating todos", error);
  process.exit(1);
}
