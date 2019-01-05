console.clear();
console.log('build component');

var webpack = require('webpack');
var path = require('path');

webpack(
	{
		entry: './src/index.js',
		output: { filename: 'index.js', path: path.resolve(__dirname, 'dist') },
		externals: {
			react: 'react',
			'react-dom': 'reactDOM',
		},
	},
	(err, stats) => {
		if (err || stats.hasErrors()) {
			console.error('Errors!');
		}
		console.info('Done!');
	},
);
