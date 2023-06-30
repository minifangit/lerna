import path from 'node:path';
import fse from 'fs-extra'; //创建目录
import { pathExistsSync } from 'path-exists'; //同步检查路径是否存在
import ora from 'ora';
import { log } from '@cyfmkgruop/cli-common-utils';

//获取缓存目录
function getCacheDFilePath(targetPath, template) {
  return path.resolve(targetPath, 'node_modules', template.npmName);
}

function copyFile(targetPath, template, installDir) {
  const originFile = getCacheDFilePath(targetPath, template);
  log.verbose('文件是否存在===', pathExistsSync(originFile));
  const fileList = fse.readdirSync(originFile); //同步读取 originFile 目录下的所有文件和子目录
  const spinner = ora('正在下载模板...').start();
  fileList.map((file) => {
    fse.copySync(`${originFile}/${file}`, `${installDir}/${file}`);
  });
  spinner.stop();
  log.success('模板拷贝成功！！！');
}

export default function installTemplate(selectTemplate, opt) {
  const { force = false } = opt;
  const { targetPath, name, template } = selectTemplate;
  const rootDir = process.cwd(); //当前工作目录的路径（执行脚手架的目录）
  fse.ensureDirSync(targetPath); //确保目标路径存在，如果目标路径不存在，则创建目标路径。
  const installDir = path.resolve(`${rootDir}/${name}`); //生成安装目录路径
  if (pathExistsSync(installDir)) {
    if (!force) {
      log.error(`当前目录下已存在 ${instalLDir} 文件夹~`);
      return;
    } else {
      fse.removeSync(installDir); //同步步方式删除目录的方法
      fse.ensureDirSync(installDir); //删除之后，重新创建目录
    }
  } else {
    fse.ensureDirSync(installDir); //不存在目录，则创建目标路径。
  }

  //拷贝目录
  copyFile(targetPath, template, installDir);
}