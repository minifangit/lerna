/*
使用
 lerna add @cyfmkgruop/cli-common-command packages/init 在 init 项目中添加@cyfmkgruop/cli-common-command

 const Command = require('../../command/lib'); ->即可替代为

 */
const Command = require('@cyfmkgruop/cli-common-command');
const { log } = require('@cyfmkgruop/cli-common-utils');

class InitCommand extends Command {
  get command() {
    return 'init [name]';
  }
  get description() {
    return 'init project';
  }
  get options() {
    return [
      ['-f,--force', '是否强制更新', false],
      ['-t,--test', '是否强制更新', false]
    ];
  }
  cmdAction([name, opts]) {
    log.verbose('init...', name, opts);
  }
  preAction() {
    console.log('preAction hook execute');
  }
  postAction() {
    console.log('postAction hook execute');
  }
}

module.exports = function (instance) {
  return new InitCommand(instance);
};
