import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import semver from 'semver';
import { program } from 'commander';
import { filename, dirname } from 'dirname-filename-esm';
import { log, isDebug } from '@cyfmkgruop/cli-common-utils';

//读取pageage.json的文件内容
const __dirname = dirname(import.meta);
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json')).toString());

const LOWEST_NODE_VERSION = '15.0.0';
const preAction = () => {
  //检查node版本
  log.verbose('node版本号', process.version);
  //当前node版本低于LOWEST_NODE_VERSION版本时
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(chalk.red(`cli 需要安装${LOWEST_NODE_VERSION}以上的node.js版本`));
  }
};

export default function createCLI() {
  //log.info('version', pkg.version); //使用日志
  log.success('test-success', pkg.version); //使用定制的log.success
  program
    .name(Object.keys(pkg.bin)[0]) //脚手架的名字
    .usage('<command> [options]')
    .version(pkg.version)
    .option('-d, --debug', '是否开启调试模式', false) // --help的选项
    .hook('preAction', preAction);
  return program;
  /*  program
    .command('init [name]') //具体的命令
    .description('init project') //描述
    .option('-f,--force', '是否强制更新', false)
    .action((name, opts) => {
      console.log('init...', name, opts);
    }); */
}
