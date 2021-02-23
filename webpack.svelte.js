// webpack.svelte
'use strict'
const { resolve } = require('path')

module.exports = (config) => {
  config.module.rules.push(
    {
      test: /\.svelte$/,
      use: 'svelte-loader'
    },
    { // Required to prevent errors from Svelte on Webpack 5+.
      resolve: { fullySpecified: false },
      test: /node_modules\/svelte\/.*\.mjs$/
    }
  )

  //  The following stuff is recommended, but not necessary for our example.
  if (!config.resolve) config.resolve = {}

  Object.assign(config.resolve, {
    alias: {
      svelte: resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  })
}
