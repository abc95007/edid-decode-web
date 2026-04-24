const fs = require("node:fs/promises");
const path = require("node:path");
const vm = require("node:vm");

const inputPath = path.join(__dirname, "sample-edid.txt");
const outputPath = path.join(__dirname, "sample-output.txt");
const scriptPath = path.join(__dirname, "edid-decode.js");

const logs = [];
const errors = [];
let runtimeContext;

const injectedModule = {
  noInitialRun: true,
  print(text) {
    logs.push(text);
  },
  printErr(text) {
    errors.push(text);
  },
  setStatus() {},
  async onRuntimeInitialized() {
    try {
      const input = await fs.readFile(inputPath, "utf8");
      runtimeContext.FS.writeFile("input-file", input);
      injectedModule.ccall("parse_edid", "number", ["string", "number"], ["input-file", 0]);

      const combined = [
        logs.length ? logs.join("\n") : "",
        errors.length ? `\n[stderr]\n${errors.join("\n")}` : "",
      ]
        .join("\n")
        .trimEnd();

      await fs.writeFile(outputPath, `${combined}\n`, "utf8");
      console.log(`Wrote decoded sample output to ${outputPath}`);
    } catch (error) {
      console.error(error);
      process.exitCode = 1;
    }
  },
};

(async () => {
  const source = await fs.readFile(scriptPath, "utf8");
  const context = {
    Module: injectedModule,
    require,
    module: { exports: injectedModule },
    exports: injectedModule,
    __dirname,
    __filename: scriptPath,
    process,
    console,
    Buffer,
    setTimeout,
    clearTimeout,
    URL,
  };

  runtimeContext = vm.createContext(context);
  vm.runInContext(source, runtimeContext, { filename: scriptPath });
})();
