var webpack = require('webpack')
var path = require('path')

module.exports = {
    mode: 'development',
    entry: {
      app: './src/app.js'
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public/build',
      sourceMapFilename: './bundle.map'
    },
    devtool: "#source-map",
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
}