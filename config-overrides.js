const { override, addWebpackResolve } = require('customize-cra');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = override(
	addWebpackResolve({
		plugins: [new TsconfigPathsPlugin()],
		fallback: {
			'react/jsx-runtime': 'react/jsx-runtime.js',
			'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js'
		}
	})
);
