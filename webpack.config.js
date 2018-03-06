var webpack = require('webpack')
var path = require('path')

const config = {
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

module.exports = config