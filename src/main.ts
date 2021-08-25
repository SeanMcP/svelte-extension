import App from "./App.svelte";
import browser from "webextension-polyfill";

async function initialize() {
  console.log("SVEX up and running!");
  browser.storage.local.set({ greeting: "hello world!" });
}

initialize();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
