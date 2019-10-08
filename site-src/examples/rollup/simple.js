import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sass from "rollup-plugin-sass";
import manifest from "rollup-plugin-output-manifest";
import { terser } from "rollup-plugin-terser";
import clear from "rollup-plugin-clear";
import { writeFileSync, mkdirSync } from "fs";
import sha256 from "hash.js/lib/hash/sha/256";

const manifestSeed = {};
const outputDir = "site-src/assets/dist/rollup/simple";
export default {
  input: {
    docs: "site-src/assets/src/docs",
    app1: "site-src/assets/src/example/app1.js",
    app2: "site-src/assets/src/example/app2.js"
  },
  output: {
    entryFileNames: "[name]-[hash].js",
    format: "esm",
    dir: outputDir
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
        const hash = sha256()
          .update(styles)
          .digest("hex");
        const file = `styles-${hash.substring(0, 8)}.css`;
        mkdirSync(outputDir, { recursive: true });
        writeFileSync(`${outputDir}/${file}`, styles);
        manifestSeed["styles.css"] = {
          path: `/assets/dist/rollup/simple/${file}`,
          integrity: `sha256-${hash}`
        };
      },
      // `output: true` should output a bunch of split `.css` files in dist, but
      // it doesn't. In any case, it's a great excuse to
      options: {
        // for https://github.com/sass/dart-sass#javascript-api
        outputStyle: "compressed"
      }
    }),
    manifest({
      outputPath: "site-src/_data",
      fileName: "rollup_simple.json",
      publicPath: "/assets/dist/rollup/simple/",
      generate: keyValueDecorator => chunks =>
        chunks.reduce(
          (manifest, { name, fileName }) => ({
            ...manifest,
            ...keyValueDecorator(name, fileName)
          }),
          manifestSeed
        )
    }),
    terser()
  ]
};
