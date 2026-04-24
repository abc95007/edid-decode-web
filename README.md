# EDID Decode UI

This project mirrors the official `edid-decode` web UI and uses the same official `edid-decode.js` and `edid-decode.wasm` assets from Hans Verkuil's hosted page, so the decoded output matches the reference site closely.

## Run locally

```bash
node server.cjs
```

Then open [http://localhost:4173/index.html](http://localhost:4173/index.html).

## Verify with sample EDID

The sample input is stored in [sample-edid.txt](./sample-edid.txt).

```bash
node verify-edid.cjs
```

This writes the decoded result to [sample-output.txt](./sample-output.txt).
