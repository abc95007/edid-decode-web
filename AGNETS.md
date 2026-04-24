# AGNETS.md

This repository hosts a local web clone of the official `edid-decode` demo page.

## Purpose

- Keep the UI behavior close to the official web tool.
- Keep decode output aligned with the bundled official `edid-decode.js` and `edid-decode.wasm`.
- Make local verification easy with a sample EDID and a Node-based verification script.

## Key Files

- `index.html`: main browser UI.
- `edid-decode.js`: official bundled decoder runtime.
- `edid-decode.wasm`: official bundled decoder WebAssembly binary.
- `server.cjs`: tiny static file server for local use.
- `verify-edid.cjs`: Node-based sample verification script.
- `sample-edid.txt`: sample EDID input.
- `sample-output.txt`: expected decoded output generated from the sample input.

## Working Notes

- Treat `edid-decode.js` and `edid-decode.wasm` as upstream-generated assets.
- Prefer changing the surrounding UI and validation logic before changing the decoder assets.
- If decode behavior must change, regenerate the decoder from upstream instead of patching the generated JS manually.
- Keep the app runnable as a simple static site plus local server.

## Validation

- Start locally with `node server.cjs`.
- Verify decoder output with `node verify-edid.cjs`.
- When changing UI behavior, keep the left input pane and right parsed output flow intact.
