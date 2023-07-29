```bash
#api run /oak + KV
deno run --allow-net --watch --unstable main.ts

#start
deno run -A npm:create-vite-extra  # or
deno run --allow-read --allow-write --allow-env npm:create-vite-extra@latest

# test api
deno run --allow-env --allow-net api/main.ts

# start react App
deno task start
```

- https://www.npmjs.com/package/create-vite-extra?activeTab=readme

# Vite + Deno + Vue 3 + TypeScript

This template should help get you started developing with Vue 3 and TypeScript
in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the
[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) +
  [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are
shimmed to be a generic Vue component type by default. In most cases this is
fine if you don't really care about component prop types outside of templates.
However, if you wish to get actual prop types in `.vue` imports (for example to
get props validation when using manual `h(...)` calls), you can enable Volar's
Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette,
   look for `TypeScript and JavaScript Language Features`, then right click and
   select `Disable (Workspace)`. By default, Take Over mode will enable itself
   if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the
   command palette.

You can learn more about Take Over mode
[here](https://github.com/johnsoncodehk/volar/discussions/471).

## Running

You need to have Deno v1.28.0 or later installed to run this repo.

Start a dev server:

```
$ deno task dev
```

## Deploy

Build production assets:

```
$ deno task build
```

## Caveats

Currently there's a caveat for Deno users:

- peer dependencies need to be referenced in `vite.config.mts`. In this example
  it is only `vue` package that needs to be referenced.

## deno with express

```bash
deno run -A main.ts
```

## deno with react + vite

```bash
deno run -A npm:create-vite-extra
```