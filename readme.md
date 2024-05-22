# 💎 eslint-config

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]

_My personal [eslint][eslint] configuration._

## 📦 Installation

This package is hosted on [npm][npm].

Install the configuration as a development dependency.

```
npm install --dev @bradgarropy/eslint-config
```

## 🥑 Usage

Create an `eslint.config.js` file in the root of your project. Then import the configuration and add it to the list of configuration objects.

```javascript
import bgConfig from "@bradgarropy/eslint-config"

const config = [...bgConfig]

export default config
```

> You can add more ESLint configuration options in this file if you want.

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

[version-badge]: https://img.shields.io/npm/v/@bradgarropy/eslint-config.svg?color=FB3B49&style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/eslint-config?style=flat-square
[npm]: https://www.npmjs.com/package/@bradgarropy/eslint-config
[eslint]: https://eslint.org
[npx]: https://www.npmjs.com/package/npx
[peer]: https://www.npmjs.com/package/install-peerdeps
[issues]: https://github.com/bradgarropy/eslint-config/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
