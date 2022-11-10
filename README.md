# Starting with fresh 2022

## Running the project

### From task

```
Deno task start
```

### Manually

```
deno run --allow-net --allow-read --allow-env --allow-run --watch=static/,routes/ main.ts
```

- --allow-net: This is required to start the HTTP server.
--allow-read: This is required to read (static) files from disk.

- --allow-env: This is required to read environment variables that can be used to configure your project.

- --allow-run: This is required to shell out to deno and esbuild under the hood during development to do type stripping. In production this is done using a WebAssembly binary.

- --watch flag, so the fresh server will automatically reload whenever you make a change to your code.