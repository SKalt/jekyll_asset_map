# Jekyll asset map \_include

> Use hashed assets from webpack/another asset wrangler in Jekyll without a plugin

<!-- badges  -->

[![master](https://github.com/skalt/jekyll_asset_map/workflows/master/badge.svg)](https://github.com/skalt/jekyll_asset_map/actions?workflow=master) [![v1](https://github.com/skalt/jekyll_asset_map/workflows/v1/badge.svg)](https://github.com/skalt/jekyll_asset_map/actions?workflow=v1)

<!-- /badges -->

## When to use this

You should use this if all of the below are true:

[ ] you've got an existing Jekyll site written using liquid templates

[ ] you want to use some of the hot new tools from the JS ecosystem

[ ] but you don't want to completely rewrite your build process.

If you're going to process your HTML with some tool that runs in Node.js (webpack, rollup, parcel, gulp, or anything else), that tool likely has its own asset map implementation.

## Quickstart

Copy the [`_includes/asset_map` directory](./_includes/asset_map) into your own `_includes` directory.

# Documentation

You can see the docs all together on [GitHub pages](//skalt.github.io/jekyll_asset_map/) or see [`_data/docs.yml`](./_data/docs.yml), the [`_api` example collection](./_api), and working compiler configurations at [`examples`](./examples).

# Licensing

This package is free to use in open source under the terms of the [Parity Public License](./LICENSE).

Licenses for use in closed software are available via [licensezero.com](https://licensezero.com).

[![licensezero.com pricing](https://licensezero.com/projects/de9c209f-86b8-4a63-ae81-fb4ff3339d32/badge.svg)](https://licensezero.com/projects/de9c209f-86b8-4a63-ae81-fb4ff3339d32)

# Contributing

Please do! Feel free to submit issues as you encounter them. Read over the [contributing guide](./CONTRIBUTING.md) before you submit a PR.
