import webpack from 'webpack';

import packageJson from '../../package.json';
import { buildLoaders } from './loaders/buildLoaders';
import { buildPlugins } from './plugins/buildPlugins';
import { buildDevServer } from './buildDevServer';
import { buildOptimization } from './buildOptimization';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: mode || 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].bundle.js',
      uniqueName: packageJson.name,
      publicPath: 'auto',
      chunkFilename: '[id].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    optimization: buildOptimization(options),
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
