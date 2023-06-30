import { log, makeList, makeInput, getLatestVersion, request } from '@cyfmkgruop/cli-common-utils';
import { homedir } from 'node:os'; //获取系统的主目录路径
import path from 'node:path';

const ADD_TYPE_PROJECT = 'project';
const ADD_TYPE_PAGE = 'page';
/* 
//通过接口获取
const ADD_TEMPLATE = [
  { name: 'vue3项目模板', npmName: '@cyfmkgruop/item-vue-template', version: '0.0.0' },
  { name: 'react项目模板', npmName: '@cyfmkgruop/item-react-template', version: '0.0.0' }
]; */
const ADD_TYPE = [
  { name: '项目', value: ADD_TYPE_PROJECT },
  { name: '页面', value: ADD_TYPE_PAGE }
];
const TEMP_HOME = '.cli-item'; //缓存目录
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
    defaultValue: '',
    validate(v) {
      return v.length ? true : '项目名称必须输入';
    }
  });
}
//选择项目模板
function getAddTemplate(ADD_TEMPLATE) {
  return makeList({
    choices: ADD_TEMPLATE,
    message: '请选择项目模板'
  });
}
//安装缓存目录
function makeTargetPath() {
  return path.resolve(`${homedir()}/${TEMP_HOME}`, 'addTemplate');
}

//通过api获取项目模板列表
async function getTemplateFromAPI() {
  try {
    const data = await request({
      url: '/v1/project',
      method: 'get'
    });
    return data;
  } catch (error) {
    Promise.reject(error);
  }
}
export default async function createTemplate(name, opts) {
  const ADD_TEMPLATE = await getTemplateFromAPI();
  const { type = 'project', template } = opts;
  let addType; //模板类型
  let addName; //模板名称
  let addTemplate; //模板类型
  if (type) {
    addType = type;
  } else {
    addType = await getAddType();
  }
  log.verbose('addType', addType);
  if (addType === ADD_TYPE_PROJECT) {
    if (name) {
      addName = name;
    } else {
      addName = await getAddName();
    }
    if (template) {
      addTemplate = template;
    } else {
      addTemplate = await getAddTemplate(ADD_TEMPLATE);
    }
    const selectTemplate = ADD_TEMPLATE.find((item) => item.name === addTemplate);
    if (!selectTemplate) {
      throw new Error(`项目模板${addTemplate}不存在`);
    }
    //获取最新版本号
    const latestVersion = await getLatestVersion(selectTemplate.npmName);
    selectTemplate.version = latestVersion;
    const targetPath = makeTargetPath();
    /*  log.verbose('getAddName====', addName); */
    return {
      type: addType,
      name: addName,
      template: selectTemplate,
      targetPath
    };
  } else {
    throw new Error(`创建的项目类型${addType}不支持`);
  }
}
