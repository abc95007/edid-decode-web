# EDID Decode Web

This project provides a local web implementation that closely mirrors the official `edid-decode` demo UI and decode output.

It uses the official bundled `edid-decode.js` and `edid-decode.wasm` decoder assets, so the parsed EDID text stays aligned with the upstream web tool for the same input data.

## Features

- Two-column UI similar to the official EDID web decoder.
- Supports pasted EDID hex input and uploaded EDID binary files.
- Optional diagonal input, matching the upstream page behavior.
- Sample EDID loader for quick testing.
- Local verification script that generates a reference decode output file.

## Project Files

- `index.html`: browser UI.
- `server.cjs`: lightweight local static server.
- `verify-edid.cjs`: sample decode verification script.
- `sample-edid.txt`: sample EDID data.
- `sample-output.txt`: generated sample decode result.
- `AGNETS.md`: repository collaboration notes.

## Run Locally

```bash
node server.cjs
```

Then open:

`http://127.0.0.1:4173/index.html`

## Verify Decode Output

```bash
node verify-edid.cjs
```

This regenerates `sample-output.txt` from `sample-edid.txt`.

## Notes

- The decoder assets are treated as upstream-generated files.
- If you only need UI or workflow changes, update the local HTML or helper scripts.
- If you need different decode rules, the correct path is to modify upstream `edid-decode` sources and rebuild the generated JS/WASM assets.
