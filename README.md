# Svelte Extension (SVEX)

A browser-extension template powered by Svelte

## Features

- Supports Chrome and Firefox
- History for frustration-free use
- Popup for persistent extensions
- SPA architecture for rapid development

## Powered by

- [Svelte](https://svelte.dev): Performant and reactive framework
- [TypeScript](https://www.typescriptlang.org/): A strongly-typed superset of JavaScript
- [Vite](https://vitejs.dev): Resource bundling and fast builds
- [webextension-polyfill](https://github.com/mozilla/webextension-polyfill): A lightweight WebExtension API polyfill for Chrome

## How to use

1. Clone this repository or use it as a template
2. Change fields in `manifest.json`: "name", "short_name", "description", and "author"
3. Replace icons in `public/` directory
4. Change `initialize` function in `src/main.ts`
5. Go to town!

For examples of using the WebExtension API and `browser`, see:
- `src/main.ts > initialize`
- `src/utils.ts > checkHistory`

## Additional information

There are two `manifest.json` files in this project to give you the choice of which `manifest_version` that you want to use for your extension. As of September 2021, Chrome/Chromium-powered browsers support manifest v3 but Firefox does not. I have set the default to v2 to promote cross-browser extensions, but I will change that to v3 once Firefox adds support. That could be [as early as early 2022](https://blog.mozilla.org/addons/2021/05/27/manifest-v3-update/).

## License

Copyright &copy; 2021 [Sean McPherson](https://seanmcp.com)
