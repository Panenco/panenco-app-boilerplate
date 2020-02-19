# Panenco-monorepo-app

Panenco-monorepo-app is a frontend application that constists of couple packages in a single monorepo.

`@pma/ui`, `@pma/server`, `@pma/app`

To run npm scripts of some package, you can use:

- `yarn ui ...`
- `yarn server ...`
- `yarn app ...`

Basically that means that `yarn packageName ...` is equivalent of `cd packages/packageName && npm run ...`. When you add another package to your `packages` directory, don't forget to add new 'shortcut'.

## Installing all dependencies in all packages

```
yarn
```

## Adding new dependencies to packages

`cd packages/{package-you-need-to-add-module-to} && yarn add {module-you-want-to-add}`

## Removing dependencies from packages

`cd packages/{package-you-need-to-remove-module-from} && yarn remove {module-you-want-to-remove}`
