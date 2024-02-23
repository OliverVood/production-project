import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const PATHS = options.paths;
	const MODE = options.mode;
	const IS_DEV = options.isDev;

	return {
		mode: MODE,
		entry: PATHS.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: PATHS.build,
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(),
		devtool: IS_DEV ? 'inline-source-map': undefined,
		devServer: IS_DEV ? buildDevServer(options) : undefined
	}
}