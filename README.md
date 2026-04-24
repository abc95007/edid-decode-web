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
00 ff ff ff ff ff ff 00 4c 2d 3d 72 00 00 00 00
2a 1f 01 04 a5 46 27 78 3a 64 a5 a4 54 4d 9a 26
0f 50 54 25 cf 00 71 4f 81 c0 81 00 81 80 95 00
a9 c0 b3 00 d1 c0 08 e8 00 30 f2 70 5a 80 b0 58
8a 00 50 1d 74 00 00 1e 56 5e 00 a0 a0 a0 29 50
30 20 35 00 50 1d 74 00 00 1a 00 00 00 fd 00 18
4b 0f 51 0f 00 0a 20 20 20 20 20 20 00 00 00 fc
00 53 41 4d 53 55 4e 47 0a 20 20 20 20 20 01 7a

02 03 1d f0 47 61 60 5f 10 1f 04 13 2c 09 07 07
15 07 50 57 07 00 67 54 00 83 01 00 00 02 3a 80
18 71 38 2d 40 58 2c 45 00 50 1d 74 00 00 1e 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 43
```

## Notes

- The decoder assets are treated as upstream-generated files.
- If you only need UI or workflow changes, update the local HTML or helper scripts.
- If you need different decode rules, the correct path is to modify upstream `edid-decode` sources and rebuild the generated JS/WASM assets.
