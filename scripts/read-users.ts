import util from "util";
import { db } from "../src/db/drizzle";

try {
  const users = await db.query.user.findMany({
    with: {
      todos: true,
    },
  });

  console.log(util.inspect(users, { depth: null, colors: true }));
} catch (error) {
  console.error("Error reading users", error);
  process.exit(1);
}
