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

## GitHub Pages

This repository is prepared for GitHub Pages deployment.

Expected project site URL:

`https://abc95007.github.io/edid-decode-web/`

## Sample Input

You can test the site immediately with the built-in sample loader, or paste this sample EDID hex:

```text
00ffffffffffff004c2d3d72000000002a1f0104a54627783a64a5a4544d
9a260f505425cf00714f81c0810081809500a9c0b300d1c008e80030f270
5a80b0588a00501d7400001e565e00a0a0a0295030203500501d7400001a
000000fd00184b0f510f000a202020202020000000fc0053414d53554e47
0a2020202020017a02031df04761605f101f04132c090707150750570700
67540083010000023a801871382d40582c4500501d7400001e0000000000
000000000000000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000043
```

## Notes

- The decoder assets are treated as upstream-generated files.
- If you only need UI or workflow changes, update the local HTML or helper scripts.
- If you need different decode rules, the correct path is to modify upstream `edid-decode` sources and rebuild the generated JS/WASM assets.
