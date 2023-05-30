#!/usr/bin/env node

'use strict';

// eslint-disable-next-line no-unused-expressions
/* require('../src/cli.mjs').default().parse(process.argv.slice(2)); */
import a from '@cyfmkgruop/lerna-test-a';
import bincli from '../src/cli.mjs';

console.log(a());
bincli().parse(process.argv.slice(2));
