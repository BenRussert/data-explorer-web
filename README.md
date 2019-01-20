# Data Explorer

Hosted at: https://data-explorer-web.firebaseapp.com/

How to set up locally for [@nteract/data-explorer](https://github.com/nteract/nteract/tree/master/packages/data-explorer) prototyping:

1.) The `@nteract/data-explorer` dependency requires a branch where I've removed `@nteract/styled-blueprintjsx` due performance issues. I'm [importing blueprint stylesheets](https://github.com/BenRussert/data-explorer-web/blob/fe2e8bce951ea86e0324388d2824719bea239be6/src/App.tsx#L5-L9) with a css loader instead, along with an `nteract.css` file copying over all the css variables that live in `@nteract/presentational-components` or other packages.

There are a few steps to get this working until we can make some changes. The rest of these notes might be confusing.

Monorepo branch this depends on:
```
git remote add ben git@github.com:BenRussert/nteract.git
git checkout branch-you-are-pulling-to
git pull ben data-explorer-web-app
```

We should be able to `yarn link` this, but I kept getting errors because the dx package hasn't shipped under the `@nteract/data-explorer` name yet. The hack below made everything work consistently:

2.) In your clone of this repo, edit the `@nteract/data-explorer` dependency path in package.json to the absolute path where your dev build is:

```
"@nteract/data-explorer": "/local/path/to/nteract/packages/data-explorer/"
```

3.) If you edit the `data-explorer` package, re-build in the monorepo packages by running: `yarn build: packages`, then from this project run `rm -rf yarn.lock node_modules/@nteract/data-explorer` then 'yarn' again.

4.) `yarn test` or `yarn start` just like any other create-react-app.
