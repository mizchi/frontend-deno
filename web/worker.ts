import { delay } from "./deps.ts";

self.addEventListener("message", (ev) => {
  console.log(ev.data, delay);
});
