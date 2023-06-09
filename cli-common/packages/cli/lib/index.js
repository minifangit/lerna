import creatInitCommand from '@cyfmkgruop/cli-common-init';
import createCLI from './createCLI.js';
import './exception.js';

export default function (args) {
  const program = createCLI();
  creatInitCommand(program);
  program.parse(process.argv);
}
