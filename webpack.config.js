const path = require('path')
module.exports = {
    entry: "./app/app.js",
    output: {
      libraryTarget: "var",
      library: "Tk",
      path: path.join(__dirname, 'public'),
      filename: "bundle.js"
    },
    externals: {
      'livescript-vendor' : 'LiveScript'
    },
    module: {
        loaders: [
            // { test: /\.jade$/, loader: "jade" },
            // // => "jade" loader is used for ".jade" files
            //
            // { test: /\.css$/, loader: "style!css" },
            // // => "style" and "css" loader is used for ".css" files
            // // Alternative syntax:
            // { test: /\.css$/, loaders: ["style", "css"] },
            // { test: /\.html$/, loader: 'ractive-component' }
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
