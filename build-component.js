console.clear();
console.log('build component');

var webpack = require('webpack');
var path = require('path');

webpack(
	{
		entry: './src/index.js',
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, 'dist'),
			libraryTarget: 'commonjs2',
		},
		externals: {
			react: 'commonjs react',
		},
	},
	(err, stats) => {
		if (err || stats.hasErrors()) {
			console.error('Errors!');
		}
		console.info('Done!');
	},
);
