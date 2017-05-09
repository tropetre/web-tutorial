var path = require("path")
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const PROD = process.argv.indexOf('--env.prod') < 0;
const DEV = !PROD;

var webpackConfiguration = function () {

    var config = {};

    config.resolve = {
        extensions: [".js", ".ts"]
    }

    config.entry = {
        'main': './main.ts',
    }

    config.output = {
        filename: "[name].js",
        publicPath: "/dist/",
        path: path.join(__dirname, './wwwroot/dist')
    }

    config.module = {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular-router-loader'
                ]
            },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.(png|jpg|jpeg|gif)$/, use: ['file-loader', 'url-loader?limit=100000'] },
            {
                test: /(\.scss$)|(\.css$)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/dist/'
                })
            }
        ]
    }

    config.devtool = DEV ? 'inline-source-map' : false;

    config.plugins = [

          new ExtractTextPlugin({
              filename: "style.css",
              disable: false,
              allChunks: true
          }),

          new webpack.NamedModulesPlugin()
    ];

    if (PROD) {
        config.plugins.concat([
          // Plugins that apply in production builds only
          new webpack.optimize.UglifyJsPlugin()
        ])
    }

    return config;

}();

module.exports = [webpackConfiguration];
