import { Configuration, container } from 'webpack';

import packageJson from '../../../../package.json';
import { nameMFService } from '../../utils/nameMFService';

const ModuleFederationPlugin = container.ModuleFederationPlugin;

interface ModuleFederationOptions {
  name: string;
  filename: string;
  exposes: { [key: string]: string };
  shared: { [key: string]: unknown };
}

export function moduleFederationPlugin(): Configuration['plugins'] {
  const shared = {
    ...packageJson.dependencies,
    react: { singleton: true, eager: true, requiredVersion: packageJson.dependencies.react },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: packageJson.dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      eager: true,
      requiredVersion: packageJson.dependencies['react-router-dom'],
    },
  };

  const moduleFederationOptions: ModuleFederationOptions = {
    name: nameMFService(),
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/app/App',
    },
    shared: shared,
  };

  return [new ModuleFederationPlugin(moduleFederationOptions)];
}
