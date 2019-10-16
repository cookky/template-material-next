const withOffline = require('next-offline')
const withProgressBar = require('next-progressbar')
const withPlugins = require('next-compose-plugins');
const withCSS = require("@zeit/next-css");

const withCSSOptions = {
	cssLoaderOptions: {
		url: true
	}
}

const progressBarOptions = {
	progressBar: {
		profile: true
	}
}

const offlineOptions = {
	target: 'serverless',
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /[.](png|jpg|ico|css)/,
				handler: 'CacheFirst',
				options: {
					cacheName: 'assets-cache',
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			},
			{
				urlPattern: /^https:\/\/code\.getmdl\.io.*/,
				handler: 'CacheFirst',
				options: {
					cacheName: 'lib-cache'
				}
			},
			{
				urlPattern: /^http.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'http-cache'
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader'],
			}
		]
	}
}

const plugins = [
	withOffline(offlineOptions),
	withProgressBar(progressBarOptions),
	withCSS(withCSSOptions)

]

module.exports = withPlugins(plugins);