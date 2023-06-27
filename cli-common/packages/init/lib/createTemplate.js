import { log, makeList, makeInput, getLatestVersion } from '@cyfmkgruop/cli-common-utils';

const ADD_TYPE_PROJECT = 'project';
const ADD_TYPE_PAGE = 'page';
const ADD_TEMPLATE = [
  { name: 'vue3项目模板', npmName: '@cyfmkgruop/item-vue-template', version: '0.0.0' },
  { name: 'react项目模板', npmName: '@cyfmkgruop/item-react-template', version: '0.0.0' }
];
const ADD_TYPE = [
  { name: '项目', value: ADD_TYPE_PROJECT },
  { name: '页面', value: ADD_TYPE_PAGE }
];
//请输入项目类型
function getAddType() {
  return makeList({
    choices: ADD_TYPE,
    defaultValue: ADD_TYPE_PROJECT,
    message: '请选择初始化类型'
  });
}
//请输入项目名称
function getAddName() {
  return makeInput({
    message: '请输入项目名称',
    defaultValue: ''
  });
}
//选择项目模板
function getAddTemplate() {
  return makeList({
    choices: ADD_TEMPLATE,
    message: '请选择项目模板'
  });
}
export default async function createTemplate(name, opts) {
  const addType = await getAddType();
  log.verbose('addType', addType);
  if (addType === ADD_TYPE_PROJECT) {
    const addName = await getAddName();
    const addTemplate = await getAddTemplate();
    const selectTemplate = ADD_TEMPLATE.find((item) => item.name === addTemplate);
    //获取最新版本号
    const latestVersion = await getLatestVersion(selectTemplate.npmName);
    selectTemplate.version = latestVersion;
    log.verbose(
      'getAddName====',
      addName,
      'addTemplate====',
      addTemplate,
      'selectTemplate====',
      selectTemplate.npmName,
      'latestVersion====',
      latestVersion
    );
    return {
      type: addType,
      name: addName,
      template: selectTemplate
    };
  }
}
