<script lang="ts">
  import browser from "webextension-polyfill";

  function handleClick() {
    const bodyRect = document.querySelector("body").getBoundingClientRect();

    browser.windows.create({
      url:
        window.location.href +
        (window.location.href.includes("?") ? "&" : "?") +
        "popup=true",
      type: "popup",
      width: Math.round(bodyRect.width ? bodyRect.width : 360),
      height: Math.round(bodyRect.height ? bodyRect.height + 30 : 400),
    });
  }
</script>

<button on:click|preventDefault={handleClick}>Popup</button>
