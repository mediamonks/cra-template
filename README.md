# MediaMonks Create React App Templates

## Usage

The `yarn create react-app` command can be used to instantiate a new project. The `react-scripts` and [template](#Templates) must be augmented with our custom versions.

```shell
yarn create react-app my-app --scripts-version @mediamonks/react-scripts --template @mediamonks

# OR

yarn create react-app my-app --scripts-version @mediamonks/react-scripts --template @mediamonks/standard
```

## Templates

### [base]("./base/template.json")

Exactly the same as the default CRA TypeScript template, but with some additional MM specific standards and tooling.

### [standard]("./standard/template.json")

The "best practices" template. It extends the base template, contains additional libraries and boilerplate selected to provide optimal developer experience.

- [cypress](https://www.cypress.io/), a modern E2E testing tool, essential for larger projects with a lot of moving parts.

## react-scripts

The templates have been designed to be used with our [custom react-scripts](https://github.com/mediamonks/create-react-app).

### Differences to CRA

| Addition         | Reasoning                                                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TYPE_CHECK` env | There exist cases where we don't want webpack to constantly typecheck and alert us to typing errors/warnings. By default this flag is enabled and can be disabled by creating a `.env` file in the root of the project and adding `TYPE_CHECK=false` |

| Change                                                                       | Reasoning                                                                                                                                                              |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MediaMonks eslint](https://github.com/mediamonks/frontend-coding-standards) | The existing eslint setup was changed with the MM version, in order to maintain the same standards across different projects and to make it easier to set up new ones. |
| `start` renamed to `dev`                                                     | Again, this change was made in order to maintain cohesion between all of our projects.                                                                                 |

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
