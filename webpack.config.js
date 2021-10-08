// webpack.config
'use strict'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { format } = require('util')
const { resolve } = require('path')
const ass = require('assert-fine')

const platforms = ['React', 'Svelte', 'Vue']

module.exports = env => {
  const mode = env.mode || (env.production ? 'production' : 'development')
  const { src } = env, l = src && src.length
  const title = l && platforms.find(s => s.slice(0, l).toLowerCase() === src)

  if (!title) {
    process.stderr.write(
      format('Unknown source: %o - use --env src=r|s|v\n', env.src))
    process.exit(1)
  }

  const platform = title.toLowerCase()

  const conf = {
    devServer: {
      contentBase: resolve(__dirname, 'public'),
      port: 1111
    },
    entry: resolve(__dirname, 'src', 'start.' + platform + '.js'),
    mode,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          exclude: /node_modules/,
          include: resolve(__dirname, 'src'),
          test: /\.(jsx|js)$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                '@babel/preset-react'
              ]
            }
          }]
        }
      ]
    },
    output: {
      filename: 'static/[name].js',
      globalObject: 'this',
      path: resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.ejs',
        templateParameters: { title }
      }),
      new MiniCssExtractPlugin({ filename: '[name].css' })
    ]
  }

  if (mode !== 'production') {
    conf.devServer.hot = true
    conf.devtool = 'inline-source-map'
    conf.plugins.push(new CleanWebpackPlugin())
  }

  require(resolve(__dirname, 'webpack.' + platform))(conf)

  return conf
}
