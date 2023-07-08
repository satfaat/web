import { Context } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import data from "./data.json" assert { type: "json" };

export const Greeting = (ctx: Context) => {
  ctx.response.body = "Welcome to dinosaur API!";
};

export const AllDino = (ctx: Context) => {
  ctx.response.body = data;
};

export const GetDino = (ctx: Context) => {
  if (ctx?.params?.dinosaur) {
    const found = data.find((item) =>
      item.name.toLowerCase() === ctx.params.dinosaur.toLowerCase()
    );
    if (found) {
      ctx.response.body = found;
    } else {
      ctx.response.body = "No dinosaurs found.";
    }
  }
};
