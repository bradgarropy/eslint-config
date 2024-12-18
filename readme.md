# 💎 eslint-config

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]

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

const config = [
    ...bgConfig,
    // { Your configuration goes here. },
]

export default config
```

> You can add more ESLint configuration options in this file if you want.

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt="Brad Garropy"/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/eslint-config/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/eslint-config/commits?author=bradgarropy" title="Documentation">📖</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/bradgarropy/eslint-config/commits?author=bradgarropy" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/bradgarropy/eslint-config/pulls?q=is%3Apr+reviewed-by%3AJoshuaKGoldberg" title="Reviewed Pull Requests">👀</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[version-badge]: https://img.shields.io/npm/v/@bradgarropy/eslint-config.svg?color=FB3B49&style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/eslint-config?style=flat-square
[npm]: https://www.npmjs.com/package/@bradgarropy/eslint-config
[eslint]: https://eslint.org
[issues]: https://github.com/bradgarropy/eslint-config/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
[contributing]: https://github.com/bradgarropy/eslint-config/blob/main/contributing.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors]: #-Contributors
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/eslint-config?
