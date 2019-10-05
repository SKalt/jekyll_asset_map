# Jekyll asset map \_include
> rails-webpacker's asset inclusion tags as jekyll \_includes

## When to use this
You should use this if all of the below are true:

[ ] you've got an existing Jekyll site written using liquid templates

[ ] you want to use some of the hot new tools from the JS ecosystem

[ ] but you don't want to completely rewrite your build process.

If you're going to process your HTML with some tool that runs in Node.js (webpack, rollup, parcel, gulp, or anything else), that tool likely has its own asset map implementation.

## Quickstart

```sh
#!/usr/bin/env bash
# TODO
# install.sh
ASSET_MAP_VERSION="${ASSET_MAP_VERSION:-1.0.0}";
# ^ must always specify a full semver number
TARGET_LOCATION="${1:-./}"
curl -O https://raw.githubusercontent.com/ | gunzip
```

# [Documentation](//skalt.github.io/jekyll_asset_map/)
<!-- TODO: move to actual site link? -->
# [Contributing and development](./CONTRIBUTING.md)
