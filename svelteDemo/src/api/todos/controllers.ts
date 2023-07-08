import { Context } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { getAllTasks } from "../../db/todosdb";

// Get all tasks
export const GetTasks = (ctx: Context) => {
  ctx.response.type = "json";
  ctx.response.body = getAllTasks();
};

// Add new task
export const AddTask = (ctx: Context) => {

};

// export const GetDino = (ctx: Context) => {
//   if (ctx?.params?.dinosaur) {
//     const found = data.find((item) =>
//       item.name.toLowerCase() === ctx.params.dinosaur.toLowerCase()
//     );
//     if (found) {
//       ctx.response.body = found;
//     } else {
//       ctx.response.body = "No dinosaurs found.";
//     }
//   }
// };
