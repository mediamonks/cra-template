# Base MM Create React App Template

> cra-template-mm-base

---

## Usage

This template is designed to be used together with our [custom react-scripts](https://github.com/psimk/create-react-app).

> npx

```shell
npx create-react-app my-app --scripts-version @psimk/react-scripts --template mm-base
```

> yarn

```shell
yarn create create-react-app my-app --scripts-version @psimk/react-scripts --template mm-base
```

## Differences to CRA

| Addition           | Reasoning                                                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| polyfill splitting | Modern browsers are used by at least 90% of our _general_ user base. In order to decrease loading times for these users, we load the polyfills only for browsers which need them. The polyfill chunk will only be loaded via `<script nomodule .../>`. |
| `TYPE_CHECK` env   | There exist cases where we don't want webpack to constantly typecheck and alert us to typing errors/warnings. By default this flag is enabled and can be disabled by creating a `.env` file in the root of the project and adding `TYPE_CHECK=false`   |

| Change                                                                       | Reasoning                                                                                                                                                              |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MediaMonks eslint](https://github.com/mediamonks/frontend-coding-standards) | The existing eslint setup was changes with the MM version, in order to maintain the same standards across different projects and to make it easier to set up new ones. |
| `start` renamed to `dev`                                                     | Again, this change was made in order to maintain cohesion between all of our projects.                                                                                 |

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
