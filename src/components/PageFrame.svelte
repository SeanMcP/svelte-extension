<script lang="ts">
  import { navigate } from "svelte-routing";

  import browser from "webextension-polyfill";
  import { BASE_PATH } from "../constants";

  const pathname = window.location.pathname.slice(BASE_PATH.length);

  console.log(pathname);

  switch (pathname) {
    // Home route
    case "": {
      if (window.location.search.includes("back=true")) {
        // Navigation was intentional
        browser.storage.local.remove("hist");
      } else {
        browser.storage.local.get("hist").then(({ hist }) => {
          if (hist) {
            if (hist.at >= Date.now() - 5 * 60 * 1000) {
              // History is fresh; navigate to path
              navigate(hist.path);
            } else {
              // History is stale; remove
              browser.storage.local.remove("hist");
            }
          }
        });
      }
      break;
    }
    default: {
      browser.storage.local.set({
        hist: {
          path: window.location.pathname + window.location.search,
          at: new Date().getTime(),
        },
      });
    }
  }
</script>

<div>
  <slot />
</div>
