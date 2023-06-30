/*
使用
 lerna add @cyfmkgruop/cli-common-command packages/init 在 init 项目中添加@cyfmkgruop/cli-common-command

 const Command = require('../../command/lib'); ->即可替代为

 */
import Command from '@cyfmkgruop/cli-common-command';
import { log } from '@cyfmkgruop/cli-common-utils';
import createTemplate from './createTemplate.js';
import downloadTemplate from './downloadTemplate.js';
import installTemplate from './installTemplate.js';
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
      ['-t,--type <type>', '项目类型（值：project/page）'], //非交互式命令,可通过脚手架参数传递数据
      ['-tp,--template <template>', '模板名称'] //非交互式命令
    ];
  }
  async cmdAction([name, opts]) {
    log.verbose('init...', name, opts);
    // 1.选择项目模板，生成项目信息
    const selectTemplate = await createTemplate(name, opts);
    log.verbose('selectTemplate===', selectTemplate);
    // 2.下载项目模板至缓存目录
    await downloadTemplate(selectTemplate);
    // 3.安装项目模板至项目目录
    await installTemplate(selectTemplate, opts);
  }
  preAction() {
    console.log('preAction hook execute');
  }
  postAction() {
    console.log('postAction hook execute');
  }
}

export default function (instance) {
  return new InitCommand(instance);
}
