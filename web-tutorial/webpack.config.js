var webpack = require("webpack");
var path = require("path")
const PROD = process.argv.indexOf('--env.prod') < 0;
const DEV = !PROD;

var webpackConfiguration = function () {

  var config = {};

  config.resolve = {
    extensions: [".js", ".ts"]
  }

  config.entry = {
    'boot': './src/boot.js',
  }

  config.output = {
    filename: "[name].js",
    publicPath: "/dist/",
    path: path.join(__dirname, './wwwroot/dist')
  }

  config.module = {
    loaders: [
      {
        test: /\.ts$/,
        include: /ClientApp/,
        loaders: [
            'ts',
            'angular2-router-loader'
        ]
      },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'to-string!css' },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url', query: { limit: 25000 } }
    ]
  }

  config.devtool = DEV ? 'inline-source-map' : false;

  config.plugins = [
    //new webpack.DllReferencePlugin({
    //  context: __dirname,
    //  manifest: require('./wwwroot/dist/vendor-manifest.json')
    //})
  ];
  
  if (DEV) {
    config.plugins.concat([
      // Plugins that apply in production builds only
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ])
  }

  return config;

}();

module.exports = [webpackConfiguration];