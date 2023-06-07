#!/usr/bin/env node

import importLocal from 'import-local';
import { log } from '@cyfmkgruop/cli-common-utils';
import { filename } from 'dirname-filename-esm';
import entry from '../lib/index.js';

const __filename = filename(import.meta);
log.info('__filename=========', __filename);
if (importLocal(__filename)) {
  log.info('cli', '使用本次common-lerna-cli版本');
} else {
  entry(process.argv.slice(2));
}
