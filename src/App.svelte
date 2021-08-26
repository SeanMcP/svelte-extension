<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import { onMount } from "svelte";
  import browser from "webextension-polyfill";

  import Home from "./pages/Home.svelte";
  import Another from "./pages/Another.svelte";
  import PopupButton from "./components/PopupButton.svelte";
  import { BASE_PATH } from "./constants";

  onMount(async () => {
    const result = await browser.storage.local.get();
    console.log(result);
  });
</script>

<Router basepath={BASE_PATH}>
  <nav>
    <Link to={`${BASE_PATH}?back=true`}>Home</Link>
    <Link to="another">Another</Link>
    {#if !window.location.search.includes("popup=true")}
      <PopupButton />
    {/if}
  </nav>
  <Route path="another"><Another /></Route>
  <Route path="/"><Home /></Route>
</Router>
