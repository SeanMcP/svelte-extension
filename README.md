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

## License

Copyright &copy; 2021 [Sean McPherson](https://seanmcp.com)
