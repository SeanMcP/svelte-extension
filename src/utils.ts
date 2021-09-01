import browser from "webextension-polyfill";
import { navigate } from "svelte-routing";

import { LOCAL_KEYS } from "./constants";

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export async function checkHistory() {
  const { history } = await browser.storage.local.get(LOCAL_KEYS.HISTORY);

  if (history) {
    if (history.at >= Date.now() - FIVE_MINUTES_IN_MS) {
      // History is fresh; navigate to path
      navigate(history.path);
      return history.data;
    } else {
      // History is stale; clear
      clearHistory();
    }
  }

  return null;
}

export function clearHistory() {
  browser.storage.local.remove(LOCAL_KEYS.HISTORY);
}

export function recordHistory(data = null) {
  browser.storage.local.set({
    [LOCAL_KEYS.HISTORY]: {
      at: Date.now(),
      data,
      path: window.location.pathname + window.location.search,
    },
  });
}
