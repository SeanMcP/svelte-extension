<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import { onMount } from "svelte";
  import browser from "webextension-polyfill";

  import Home from "./pages/Home.svelte";
  import Another from "./pages/Another.svelte";
  import PopupButton from "./components/PopupButton.svelte";

  onMount(async () => {
    const result = await browser.storage.local.get();
    console.log(result);
  });
</script>

<Router basepath="/dist/index.html">
  <nav>
    <Link to="/">Home</Link>
    <Link to="another">Another</Link>
    {#if !window.location.search.includes("popup=true")}
      <PopupButton />
    {/if}
  </nav>
  <Route path="another"><Another /></Route>
  <Route path="/"><Home /></Route>
</Router>
