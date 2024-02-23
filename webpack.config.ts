import webpack from 'webpack';
import {buildWebpackConfig} from "./config/duild/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/duild/types/config";
import path from "path";

export default (env: BuildEnv) => {

	const PATHS: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src')
	};

	const MODE = env.mode || 'development';
	const PORT = env.port || 3000;
	const IS_DEV = MODE === 'development';

	const CONFIG: webpack.Configuration = buildWebpackConfig({
		mode: MODE,
		paths: PATHS,
		isDev: IS_DEV,
		port: PORT
	});

	return CONFIG;
};