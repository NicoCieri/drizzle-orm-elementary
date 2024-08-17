import util from "util";
import { eq } from "drizzle-orm";
import { db } from "../src/db/drizzle";
import { todo, user } from "../src/db/schema";

try {
  const res = await db
    .select()
    .from(user)
    .leftJoin(todo, eq(todo.userId, user.id));

  const groupedUsers = res.reduce((acc, row) => {
    const userId = row.user.id;

    if (!acc[userId])
      acc[userId] = {
        ...row.user,
        todos: [],
      };

    if (row.todo) acc[userId].todos.push(row.todo);

    return acc;
  }, {});

  const result = Object.values(groupedUsers);
  console.log(util.inspect(result, { depth: null, colors: true }));
} catch (error) {
  console.error("Error reading todos", error);
  process.exit(1);
}
