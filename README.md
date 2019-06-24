# isl-components

> Reusable components for ISL

[![NPM](https://img.shields.io/npm/v/isl-components.svg)](https://www.npmjs.com/package/isl-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

This library is meant to be forked for any project and then be used internally to do
development

In this directory, when ready to use in a different library run
```bash
npm link
```

In the target directory run the following to begin testing locally
```bash
npm link isl-components
```


## Troubleshooting

When using styled components in the application implementing this library, you'll
need to add the "resolve" line to your webpack config to get the styled-components
to not conflict with one another when doing local development.

[Documentation](https://www.styled-components.com/docs/faqs#duplicated-module-in-node_modules) on styled-components conflicting node modules.

(This example is for a Gatsby gatsby-node.js file, but can be converted to vanilla webpack usage)
```javascript
exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "styled-components": path.resolve(
          __dirname,
          "node_modules",
          "styled-components"
        ),
      },
    },
  })
}
```
