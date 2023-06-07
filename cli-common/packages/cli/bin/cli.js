#!/usr/bin/env node

const importLocal = require('import-local');
const { log } = require('@cyfmkgruop/cli-common-utils');
const entry = require('../lib/index.js');

if (importLocal(__filename)) {
  log.info('cli', '使用本次common-lerna-cli版本');
} else {
  entry(process.argv.slice(2));
}
