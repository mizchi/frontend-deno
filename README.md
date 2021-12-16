# Frontend with deno

Conceptual deno frontend playground.

## Concepts

- Deno only (no node)
- No bundle
- Web standard oriented

## How to use

Install deno https://deno.land/

```bash
# install task runner: https://deno.land/x/velociraptor@1.0.0-beta.18
$ deno install -qA -n vr https://deno.land/x/velociraptor@1.0.0-beta.18/cli.ts
$ vr dev
```

Edit `web/main.tsx`

Example.

```ts
import { React, ReactDOM } from "./deps.ts";

// React
ReactDOM.render(
  <div>Deno meets Frontend</div>,
  document.querySelector("#root")
);

// worker
const w = new Worker("./worker.ts", { type: "module" });
w.postMessage("hello");
```

## How it works

- Transform `*.ts` on service-worker by https://github.com/mizchi/mints

## Build

```bash
# bundle
$ vr build
```

## LICENSE

MIT
