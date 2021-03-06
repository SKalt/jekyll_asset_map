import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sass from "rollup-plugin-sass";
import manifest from "rollup-plugin-output-manifest";
import clear from "rollup-plugin-clear";
import { writeFileSync, mkdirSync } from "fs";
import { terser } from "rollup-plugin-terser";
import crypto from "crypto";
const sha256 = str => crypto.createHash("sha256").update(str);

const baseurl = "jekyll_asset_map";
const publicPath = `/${baseurl}/assets/dist/rollup/split/`;

const manifestSeed = {};
const outputDir = "assets/dist/rollup/split";
export default {
  input: {
    docs: "assets/src/docs",
    app1: "assets/src/example/app1.js",
    app2: "assets/src/example/app2.js"
  },
  output: {
    entryFileNames: "[name]-[hash].js",
    format: "esm",
    dir: outputDir,
    manualChunks(id) {
      console.log({ id });
      // from https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/
      if (id.includes("node_modules")) {
        // Return the directory name following the last `node_modules` Usually
        // this is the package, but it could also be the scope.
        const dirs = id.split(path.sep);
        return dirs[dirs.lastIndexOf("node_modules") + 1];
      }
    }
  },
  plugins: [
    clear({
      targets: [outputDir],
      watch: true
    }),
    resolve(),
    commonjs(),
    sass({
      output: styles => {
        const hashB64 = sha256(styles).digest("base64");
        const hashHex = sha256(styles).digest("hex");
        const file = `styles-${hashHex.substring(0, 8)}.css`;
        mkdirSync(outputDir, { recursive: true });
        writeFileSync(`${outputDir}/${file}`, styles);
        manifestSeed["styles.css"] = {
          path: `${publicPath}/${file}`,
          integrity: `sha256-${hashB64}`
        };
      },
      // `output: true` should output a bunch of split `.css` files in dist, but
      // it doesn't. In any case, it's a great excuse to roll our own integrity
      // hash, and use that in the filename.
      options: {
        // for https://github.com/sass/dart-sass#javascript-api
        outputStyle: "compressed"
      }
    }),
    manifest({
      outputPath: "_data",
      fileName: "rollup_split.json",
      publicPath,
      generate: keyValueDecorator => chunks =>
        chunks.reduce((manifest, entry) => {
          const { name, fileName, code } = entry;
          const hash = sha256(code).digest("base64");
          const [[_name, path]] = Object.entries(
            keyValueDecorator(name, fileName)
          );
          return {
            ...manifest,
            ...{ [_name]: { path, integrity: `sha256-${hash}` } }
          };
        }, manifestSeed)
    }),
    terser()
  ]
};
