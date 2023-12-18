import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

export function buildOptimization({ mode }: BuildOptions): Configuration['optimization'] {
  const isProd = mode === 'production';

  return isProd
    ? {
        runtimeChunk: false,
        minimize: true,
        minimizer: [new TerserPlugin()],
      }
    : undefined;
}
