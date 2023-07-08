import { Application, Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import logger from "https://deno.land/x/oak_logger/mod.ts";
import { GetTasks } from "./controllers.ts";

const router = new Router();

router
  .get("/tasks", GetTasks);

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(logger.logger);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
