<script lang="ts">
  import { BASE_PATH } from "../constants";
  import { checkHistory, clearHistory, recordHistory } from "../utils";

  const pathname = window.location.pathname.slice(BASE_PATH.length);

  switch (pathname) {
    // Home route
    case "": {
      if (window.location.search.includes("back=true")) {
        // Navigation was intentional
        clearHistory();
      } else {
        checkHistory();
      }
      break;
    }
    default: {
      recordHistory();
    }
  }
</script>

<div>
  <slot />
</div>
