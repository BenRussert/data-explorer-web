# Data Explorer

Hosted at: https://data-explorer-web.firebaseapp.com/

How to set up locally for [@nteract/data-explorer](https://github.com/nteract/nteract/tree/master/packages/data-explorer) prototyping:

1.) The `@nteract/data-explorer` here requires a specific branch where I've removed `@nteract/styled-blueprintjsx` due performance issues. I'm importing blueprint stylesheets with a css loader instead, along with a `nteract.css` file copying over all the css variables that live in `@nteract/presentational-components` or other packages.

https://github.com/BenRussert/data-explorer-web/blob/fe2e8bce951ea86e0324388d2824719bea239be6/src/App.tsx#L5-L9

There are a few steps to get this working until we can make some changes:

```
git remote add ben git@github.com:BenRussert/nteract.git
git checkout branch-you-are-pulling-to
git pull ben data-explorer-web-app
```

We should be able to `yarn link` this, but I kept getting errors because the package hasn't shipped under the `@nteract/data-explorer` name. The hack below made everything work consistently:

2.) Edit the `@nteract/data-explorer` dependency path in package.json:

```
"@nteract/data-explorer": "/local/path/to/nteract/packages/data-explorer/"
```

3.) Each time you change anything in the `data-explorer` package, re-build in the monorepo by running: `yarn build: packages`, then from this project run `rm -rf yarn.lock node_modules/@nteract/data-explorer` then 'yarn' again.

4.) `cd` back here and `yarn test` or `yarn start` just like any other create-react-app.
