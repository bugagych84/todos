import { removeDataTestIdBabelPlugin } from './removeDataTestIdBabelPlugin';
import { BuildOptions } from '../../types/types';

interface BuildBabelLoader extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ mode, isTsx }: BuildBabelLoader) {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTestIdBabelPlugin,
      {
        props: ['data-testid'],
      },
    ]);
  }

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: isDev ? 'automatic' : 'classic',
            },
          ],
        ],
        plugins: [
          ...plugins,
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
        ],
      },
    },
  };
}
