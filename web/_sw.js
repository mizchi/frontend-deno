import { transformSync } from "http://esm.sh/@mizchi/mints@0.1.4";
addEventListener("install", (ev) => ev.waitUntil(skipWaiting()));
addEventListener("activate", (ev) => ev.waitUntil(clients.claim()));
addEventListener(
  "fetch",
  (ev) => /\.tsx?$/.test(ev.request.url) && ev.respondWith(handle(ev))
);
const handle = async (ev) => {
  const raw = await fetch(ev.request.url).then((res) => res.text());
  const out = transformSync(raw);
  if (out.error) throw new Error(JSON.stringify(out, null, 2));
  return new Response(out.code, {
    mode: "no-cors",
    status: 200,
    headers: {
      "Content-Type": "text/javascript",
    },
  });
};
