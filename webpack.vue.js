// webpack.vue
'use strict'

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (config) => {
  config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  )

  config.plugins.push(new VueLoaderPlugin())
}
