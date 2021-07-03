# rollup-plugin-watch
A rollup plugin to specify directories and files to watch

![Actions](https://github.com/jleeson/rollup-plugin-watch/workflows/build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jleeson/rollup-plugin-watch/blob/master/LICENSE)
[![Donate](https://img.shields.io/badge/patreon-donate-green.svg)](https://www.patreon.com/outwalkstudios)

---

## Usage

```js
import watch from "rollup-plugin-watch";

export default {
    input: "index.js",
    output: { file: "dist/index.js", format: "esm" },
    plugins: [ watch({ dir: "public" }) ]
};
```

This will watch all files and directories inside the public folder for changes.
Optionally you can filter what gets watched using the `include` and `exclude` options.

---

## Options

### include

Type: `array` or `string`
Default: `[]`

A single file, or array of files to include when watching.

### exclude

Type: `array` or `string`
Default: `[]`

A single file, or array of files to exclude when watching.

### dir

Type: `string`
Default: `null`

A directory to watch.

---

## Why

When you have a folder of static assets that are not directly imported in your code, rollup does not know when those files change. This plugin notifies rollup of changes to these files by
telling rollup to watch them. By using this plugin you dont need to break your development flow to restart the dev server..

---

## Reporting Issues

If you are having trouble getting something to work with this plugin or run into any problems, you can create a new [Issue](https://github.com/jleeson/rollup-plugin-watch/issues).

If this plugin does not fit your needs or is missing a feature you would like to see, let us know! We would greatly appreciate your feedback on it.

---

## License

rollup-plugin-watch is licensed under the terms of the [**MIT**](https://github.com/jleeson/rollup-plugin-watch/blob/master/LICENSE) license.