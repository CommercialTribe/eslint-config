# CommercialTribe eslint-configs [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/commercialtribe/eslint-config-isomorphic/master.svg
[travis-url]: https://travis-ci.org/commercialtribe/eslint-config-isomorphic
[npm-image]: https://img.shields.io/npm/v/eslint-config-isomorphic.svg
[npm-url]: https://npmjs.org/package/eslint-config-isomorphic
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-isomorphic.svg
[downloads-url]: https://npmjs.org/package/eslint-config-isomorphic

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript Isomorphic Apps

## Install

First install the base config, then choose one of the following configs.

```bash
yarn add --dev \
  @commercial-tribe/eslint-config
  eslint \
  babel-eslint \
  eslint-plugin-promise \
  eslint-plugin-standard
```

### For React:

```bash
yarn add --dev \
  eslint-plugin-react \
  eslint-plugin-import \
  eslint-import-resolver-webpack
```

*Then, add this to your .eslintrc file:*

```
{
  "extends": "@commercial-tribe/react"
}
```

### For Angular:

```bash
yarn add --dev \
  eslint-plugin-angular
```

*Then, add this to your .eslintrc file:*

```
{
  "extends": "@commercial-tribe/angular"
}
```

### For Node:

```bash
yarn add --dev \
  eslint-plugin-node
```

```
{
  "extends": "@commercial-tribe/node"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
