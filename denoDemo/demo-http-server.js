import { serve } from
"https://deno.land/std@0.84.0/http/server.ts";

console.log("Running at: http://localhost:8080/");
const SERVER = serve(":8080");

for await (const req of SERVER) {
    const BODY = "deno server";
req.respond({ body: BODY });
}