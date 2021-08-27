<script lang="ts">
  import { onMount } from "svelte";
  import { Router, Route, Link } from "svelte-routing";
  import browser from "webextension-polyfill";

  import Home from "./pages/Home.svelte";
  import Another from "./pages/Another.svelte";
  import PopupButton from "./components/PopupButton.svelte";
  import { BASE_PATH, ROUTES } from "./constants";

  onMount(async () => {
    const result = await browser.storage.local.get();
    console.log(result);
  });
</script>

<Router basepath={BASE_PATH}>
  <div>
    <nav>
      <Link to={ROUTES.TO_HOME}>Home</Link>
      <Link to={ROUTES.ANOTHER}>Another</Link>
      {#if !window.location.search.includes("popup=true")}
        <PopupButton />
      {/if}
    </nav>
    <Route path={ROUTES.ANOTHER}><Another /></Route>
    <Route path={ROUTES.HOME}><Home /></Route>
  </div>
</Router>

<style>
  div {
    display: grid;
    grid-template-rows: 20px auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    height: 400px;
    width: 400px;
  }
</style>
