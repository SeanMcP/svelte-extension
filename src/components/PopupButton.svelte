<script lang="ts">
  import browser from "webextension-polyfill";
  import { BASE_PATH } from "../constants";

  function handleClick() {
    const bodyRect = document.querySelector("body").getBoundingClientRect();

    browser.windows.create({
      url: BASE_PATH + '?popup=true', // History will redirect you to the correct url
      type: "popup",
      width: Math.round(bodyRect.width ? bodyRect.width : 360),
      height: Math.round(bodyRect.height ? bodyRect.height + 30 : 400),
    });
  }
</script>

<button on:click|preventDefault={handleClick}>Popup</button>
