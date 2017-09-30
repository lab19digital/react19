var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var loaderUtils = require("loader-utils");

// const ExtractCss = new ExtractTextPlugin('styles.css');

module.exports = function( env ){
  return {
    context: __dirname,
    devServer: {
      hot:true,
      contentBase: path.join(__dirname, "dist"),
      port: 3000,
      historyApiFallback: {
        index: 'index.html'
      },
      publicPath: "/",
    },
    devtool: "cheap-module-source-map",
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      "./web/index.js",
      "./web/styles.js"
    ],
    output: {
    	filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module : {
      rules: [{
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader'
          }]
        },
        {
          test: /\.scss$/,
          include: [
            path.resolve(__dirname, 'web'),
            path.resolve(__dirname, 'node_modules', 'bootstrap', 'scss')
          ],
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]',
              options: {
                localIdentName: '[local][hash:6]',
                modules:true,

                // // Custom implementation
                // // Allows a single unique class name to avoid css conflicts
                // // This is the parent classname of the component
                getLocalIdent: getLocalIdent
              }
            },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader', query: { modules : true } }
          ]
        },
        {
          test: /\.css$/,
          include: [path.resolve('node_modules', 'react-dates')],
          use: [
            {
              loader: 'style-loader'
            },{
              loader: 'css-loader'
            }
          ]
        },
        {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            loader: 'url-loader',
            exclude: [path.join(__dirname, 'components', 'icon')]
        },
        {
          test: /\.svg$/,
          loaders:[{
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          },
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true
            }
          }],
          include: [
            path.join(__dirname, 'components', 'icon'),
            path.join(__dirname, 'components', 'icon', 'theme')
          ]
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          exclude: [/node_modules/],
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]'
          ]
        }

        // Loaders for other file types can go here
      ],
    },
    plugins : [
      // ExtractCss,
      // new CommonsChunkPlugin({
      //     name: "vendor",
      //     minChunks: Infinity
      // }),
      new webpack.DefinePlugin({
        'process' : {
          'env': {
            LOCAL_DEV   : env === 'dev',
            PRODUCTION  : env === 'prod'
          }
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ],
    resolve : {
      alias : {
        'bootstrap' : path.resolve(__dirname, "node_modules", "bootstrap/less")
      },
      modules : [
        path.resolve(__dirname, "theme"),
        path.resolve(__dirname, "node_modules")
      ]
    }
  }
}

var loaderUtils = require("loader-utils");
var path = require("path");

function getLocalIdent(loaderContext, localIdentName, localName, options) {
  if(!options.context)
    options.context = loaderContext.options && typeof loaderContext.options.context === "string" ? loaderContext.options.context : loaderContext.context;
  var request = path.relative(options.context, loaderContext.resourcePath);
  options.content = options.hashPrefix + request + "+" + localName;
  localIdentName = localIdentName.replace(/\[local\]/gi, localName);
  var hash = loaderUtils.interpolateName(loaderContext, localIdentName, options);
  return (localName.indexOf('__') === 0 ? hash : localName);
};
