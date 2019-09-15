# Jekyll asset map \_include
> rails-webpacker's asset inclusion tags as a jekyll \_include

## When to use this
You should use this if

[ ] you've got an existing site written in Jekyll and

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
curl -o https://raw.githubusercontent.com/
```

# [Documentation](./docs/index.md)
<!-- TODO: move to actual site link? -->
# [Contributing and development](./CONTRIBUTING.md)
