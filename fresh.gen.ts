// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_500.tsx";
import * as $2 from "./routes/about.tsx";
import * as $3 from "./routes/api/hello.ts";
import * as $4 from "./routes/countdown.tsx";
import * as $5 from "./routes/errors.tsx";
import * as $6 from "./routes/github/[username].tsx";
import * as $7 from "./routes/greet/[name].tsx";
import * as $8 from "./routes/index.tsx";
import * as $9 from "./routes/search.tsx";
import * as $$0 from "./islands/Countdown.tsx";
import * as $$1 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_500.tsx": $1,
    "./routes/about.tsx": $2,
    "./routes/api/hello.ts": $3,
    "./routes/countdown.tsx": $4,
    "./routes/errors.tsx": $5,
    "./routes/github/[username].tsx": $6,
    "./routes/greet/[name].tsx": $7,
    "./routes/index.tsx": $8,
    "./routes/search.tsx": $9,
  },
  islands: {
    "./islands/Countdown.tsx": $$0,
    "./islands/Counter.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
