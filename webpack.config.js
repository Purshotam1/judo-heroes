const webpack=require('webpack');
const path = require('path');

module.exports = {
	entry: path.join(__dirname,'src','app-client.js'),
	output:{
	 	path:path.joim(__dirname,'src','static','js'),
	 	filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:path.join(__dirname,'src'),
			loader:['babel-loader'],
			query:{
				cacheDirectory:'bable-cache',
				persets:['react','es2015']
			}
		}]
	},
	plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]

};