# eslint-config-isomorphic [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/commercialtribe/eslint-config-isomorphic/master.svg
[travis-url]: https://travis-ci.org/commercialtribe/eslint-config-isomorphic
[npm-image]: https://img.shields.io/npm/v/eslint-config-isomorphic.svg
[npm-url]: https://npmjs.org/package/eslint-config-isomorphic
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-isomorphic.svg
[downloads-url]: https://npmjs.org/package/eslint-config-isomorphic

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript Isomorphic Apps

## Install

This module is for advanced users.

```bash
npm install eslint-config-isomorphic
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
yarn add eslint-config-isomorphic eslint babel-eslint eslint-import-resolver-webpack eslint-plugin-angular eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```

Then, add this to your .eslintrc file:

For React:

```
{
  "extends": "isomorphic/react"
}
```

For Angular:

```
{
  "extends": "isomorphic/angular"
}
```

For Node:

```
{
  "extends": "isomorphic/node"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
