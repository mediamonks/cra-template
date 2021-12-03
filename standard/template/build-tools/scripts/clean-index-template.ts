import * as path from 'path';
import { readFile, writeFile } from 'fs/promises';

/**
 * This script executes post build and rewrites the index.html file removing
 * injected scripts from the build.
 */
(async () => {
  const index = path.resolve('./build/index.html');
  const contents = await readFile(index, { encoding: 'utf-8' });
  const cleaned = contents.replace(/<script src="[\w\d-\/]*static\/js\/[\w\d\.-]*"><\/script>/ig,'');

  await writeFile(index, cleaned, { encoding: 'utf-8' });
})();
