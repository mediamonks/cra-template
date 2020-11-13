# Contributing

## Merging the base template into other templates

In order to make the process of updating templates which extend the base template easier. We use `git merge-file` with an `.empty` file.

> example, merging the `template.json` files:

```shell
git merge-file standard/template.json .empty base/template.json
```
