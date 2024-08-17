import { db } from "../src/db/drizzle";
import { user } from "../src/db/schema";

try {
  await db.insert(user).values({
    name: "Foo",
  });
  console.log("User created successfully");
} catch (error) {
  console.error("Error creating user", error);
  process.exit(1);
}
