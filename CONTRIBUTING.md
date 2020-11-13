# Contributing

## Base Template Workflow

Templates such as `standard` extend the `base` template and as such, need to reflect any and all changes that `base` receives.
In general it is recommended to first implement a new feature in the `base` template and then update each template with its own "merge" commit.

- For features, which add new files/folders it is recommended to after the feature is implemented and tested, to simply use the `cp` command to update other templates.
- For fixes or features, which require modifying existing files the `git merge-file` command can be used to use `git` in the process of merging in new changes. As `git merge-file` is a 3 way merge, we have `.empty` file to facilitate merging just 2.

> example for merging the `template.json` file:

```shell
git merge-file standard/template.json .empty base/template.json
```

## Versioning

Versioning is handled by the `scripts/version.js` script, simply running it and passing it a version or a `minor | major | patch` will update all templates to that version.
