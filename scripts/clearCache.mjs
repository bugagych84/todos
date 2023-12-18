import { existsSync, lstatSync, readdirSync, rmdirSync, unlinkSync } from 'fs';
import { dirname,join, resolve } from 'path';
import { fileURLToPath } from 'url';

function deleteCacheFolder() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const nodeModulesPath = resolve(__dirname, '../node_modules');

  const cacheFolderPath = join(nodeModulesPath, '.cache');

  function deleteFolderRecursive(folderPath) {
    if (existsSync(folderPath)) {
      readdirSync(folderPath).forEach((file) => {
        const curPath = join(folderPath, file);
        if (lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          unlinkSync(curPath);
        }
      });

      rmdirSync(folderPath);
    }
  }

  deleteFolderRecursive(cacheFolderPath);
}

deleteCacheFolder();