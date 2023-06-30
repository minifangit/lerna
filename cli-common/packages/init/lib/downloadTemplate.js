import path from 'node:path';
import { pathExistsSync } from 'path-exists'; //同步检查路径是否存在
import fse from 'fs-extra'; //创建目录
import ora from 'ora';
import { execa } from 'execa';
import { log } from '@cyfmkgruop/cli-common-utils';
//获取目录
function getCacheDir(targetPath) {
  return path.resolve(targetPath, 'node_modules'); //需要安装node_modules目录。否则直接使用npm install是下载不成功的
}
//创建目录
function makeCacheDir(targetPath) {
  const cacheDir = getCacheDir(targetPath);
  if (!pathExistsSync(cacheDir)) {
    fse.mkdirpSync(cacheDir);
  }
}
//下载模板
async function downloadAddTemplate(targetPath, template) {
  const { npmName, version } = template;
  const installCommand = 'npm'; //执行的命令
  const installArgs = ['install', `${npmName}@${version}`]; //命令的参数列表
  /* log.verbose('installArgs=====', installArgs, 'targetPath====', targetPath); */
  //cwd:指定子进程的当前工作目录
  await execa(installCommand, installArgs, { cwd: targetPath });
}
export default async function downloadTemplate(selectTemplate) {
  const { targetPath, template } = selectTemplate;
  makeCacheDir(targetPath);
  const spinner = ora('正在下载模板...').start();
  try {
    await downloadAddTemplate(targetPath, template);
  } catch (error) {
    Promise.reject(error);
  } finally {
    setTimeout(() => spinner.stop(), 2000);
  }
}
