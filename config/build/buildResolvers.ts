import { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

export function buildResolvers({ paths }: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': paths.src,
    },
  };
}
