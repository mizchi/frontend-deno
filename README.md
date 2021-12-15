# frontend with deno

## dev

```bash
$ deno run --allow-net --allow-read https://deno.land/std@0.117.0/http/file_server.ts web --port 7777
```

## build

```bash
deno bundle main.ts _bundle.js
```
