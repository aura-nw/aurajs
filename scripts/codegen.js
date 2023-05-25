import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';

const TELESCOPE_CONFIG = require('../.telescope.json');
const outPath = join(TELESCOPE_CONFIG.outPath);
rimraf(outPath);

telescope(TELESCOPE_CONFIG)
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
