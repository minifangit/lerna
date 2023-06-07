const commander = require('commander');
const pkg = require('../package.json');
const semver = require('semver');
const chalk = require('chalk');

const creatInitCommand = require('@cyfmkgruop/cli-common-init');
const { log, isDebug } = require('@cyfmkgruop/cli-common-utils');

const { program } = commander;
const LOWEST_NODE_VERSION = '15.0.0';
const preAction = () => {
  //检查node版本
  log.verbose('node版本号', process.version);
  //当前node版本低于LOWEST_NODE_VERSION版本时
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(`cli 需要安装${LOWEST_NODE_VERSION}以上的node.js版本`);
  }
};

//注册一个全局的未捕获异常处理器。当一个异常没有被任何 try-catch 块捕获时，它会被传递到这个处理器，再由这个处理器来处理异常
process.on('uncaughtException', (e) => {
  if (isDebug()) {
    log.verbose(e);
  } else {
    log.info(e.message);
  }
});

module.exports = function (args) {
  //log.info('version', pkg.version); //使用日志
  log.success('test-success', pkg.version); //使用定制的log.success
  program
    .name(Object.keys(pkg.bin)[0]) //脚手架的名字
    .usage('<command> [options]')
    .version(pkg.version)
    .option('-d, --debug', '是否开启调试模式', false) // --help的选项
    .hook('preAction', preAction);

  /*  program
    .command('init [name]') //具体的命令
    .description('init project') //描述
    .option('-f,--force', '是否强制更新', false)
    .action((name, opts) => {
      console.log('init...', name, opts);
    }); */
  creatInitCommand(program);

  program.parse(process.argv);
};
