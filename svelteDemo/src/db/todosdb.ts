import { Database } from "https://deno.land/x/aloedb@0.9.0/mod.ts";
import {
  assert,
  boolean,
  Infer,
  object,
  string,
} from "https://cdn.skypack.dev/superstruct?dts";
import {
  dirname,
  fromFileUrl,
} from "https://deno.land/std@0.103.0/path/mod.ts";
import { nanoid } from "https://deno.land/x/nanoid@v3.0.0/mod.ts";

// Specify Superstruct structure
const TaskStructure = object({
  id: string(),
  text: string(),
  done: boolean(),
});

// Create validation function
const TaskValidator = (document: any) => assert(document, TaskStructure);

// Convert structure to TypeScript type
type Task = Infer<typeof TaskStructure>;

// Get parent directory of main.ts
const DIRNAME = dirname(fromFileUrl(import.meta.url));

// Initialize database
const db = new Database<Task>({
  path: `${DIRNAME}/tasks.json`,
  validator: TaskValidator,
  pretty: true,
});

// Get all tasks
export async function getAllTasks() {
  const tasks = await db.findMany();
  return tasks;
}

// Add task
export async function addtask(body) {
  await db.insertOne({
    id: nanoid(),
    text: body.text,
    done: false,
  });

  const tasks = await db.findMany();
  return tasks;
}
