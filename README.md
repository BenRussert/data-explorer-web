# Data Explorer

How to set up for [@nteract/data-explorer](https://github.com/nteract/nteract/tree/master/packages/data-explorer) prototyping:

1.) Clone this repo and modify the `@nteract/data-explorer` dependency in package.json:

```
"@nteract/data-explorer": "/path/to/nteract/packages/data-explorer/"
```

2.) Build nteract packages: `cd` to your local clone of the nteract monorepo, run: `yarn build: packages`

3.) `cd` back here and `yarn start` just like any other create-react-app
