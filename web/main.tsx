import { React, ReactDOM } from "./deps.ts";
ReactDOM.render(
  <div>Deno meets Frontend</div>,
  document.querySelector("#root")
);

React.createElement("div", {}, false);

const w = new Worker("./worker.ts", { type: "module" });
w.postMessage("hello");
