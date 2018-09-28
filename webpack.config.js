
//  webpack.config.js

const GC_active_app_file = "sec008a_app.jsx";
console.log (' ******** GC_active_app_file is ->' + GC_active_app_file);


//  npm i  html-webpack-plugin  --save-dev
//  npm i  mini-css-extract-plugin  --save-dev
//  npm i  webpack-md5-hash  --save-dev
//  npm i  clean-webpack-plugin  --save-dev
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//  npm i  copy-webpack-plugin  --save-dev
const CopyWebpackPlugin = require('copy-webpack-plugin')

const GC_webpack = require ('webpack');
const GC_path = require ('path');
const GC_path_public = GC_path.join (__dirname, 'public');
const GC_path_dist = GC_path.resolve( __dirname, 'dist' );

console.log ('   --- path is ', __dirname);
console.log ( '   --- GC_path_public is ', GC_path_public);
console.log ( '   --- GC_path_dist is ', GC_path_dist);

const GC_path_favicon = GC_path.join (GC_path_public, 'images');
console.log ( '   --- GC_path_favicon is ', GC_path_favicon);

const GC_path_source_JSX = GC_path.join (__dirname, 'src', GC_active_app_file);
console.log ( '   --- GC_path_source_JSX is ', GC_path_source_JSX);
console.log ( '   --- GC_path_source_JSX is ', GC_path.parse (GC_path_source_JSX) );

function GF_copy_webpack_plugin ()
{
    // return new CopyWebpackPlugin (
    //     [ ...patterns ], options
    //     );
     //new CopyWebpackPlugin([{ from: path.join(__dirname, '../resources')}], { copyUnmodified: true }),

    return new CopyWebpackPlugin (
        [ { from: GC_path_favicon }], { copyUnmodified: true }
        );
}

function GC_build_config (env)  {

    let L_config_obj = {

        entry: GC_path_source_JSX,
        output:
        {
            //path: GC__path_public,
            //  filename: 'bundle.js'
            filename: '[name].[chunkhash].js'
        },
        module:
        {
            rules :
            [
                {
                    loader: 'babel-loader',
                    test: /\.jsx$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use:
                    [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                   test: /\.(jpg|jpeg|gif|png|ico)$/,
                   exclude: /node_modules/,
                   loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
                }
            ]
        },
        plugins: [
            //  https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
            // load `moment/locale/ja.js` and `moment/locale/it.js`
            new GC_webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),

            new CleanWebpackPlugin('dist', {} ),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/index_02.html',
                filename: 'index.html'
            }),
            new WebpackMd5Hash()
            //GF_copy_webpack_plugin ()
        ]
    };

    console.log (`   --- env is ${env}`)

    if (env === 'production')
    {
        L_config_obj.devtool = 'source-map';
        L_config_obj.mode = "production";
        L_config_obj.output.path = GC_path_dist;
    }
    else
    if (env === 'development')
    {
        L_config_obj.devtool = 'cheap-module-eval-source-map';
        L_config_obj.mode = "development";
        L_config_obj.output.path = GC_path_public;

        L_config_obj.devServer = {
            contentBase: GC_path_dist,
            host: "0.0.0.0",
            port: 9900
        };
    }
    else
        console.log (`   *** BAD PARAMETER for env: ${env}`)

    return L_config_obj;

};


module.exports = GC_build_config;
  