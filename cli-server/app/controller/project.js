const { Controller } = require('egg');

const ADD_TEMPLATE = [
  { name: 'vue3项目模板', npmName: '@cyfmkgruop/item-vue-template', version: '0.0.0' },
  { name: 'react项目模板', npmName: '@cyfmkgruop/item-react-template', version: '0.0.0' },
  { name: 'vue后端管理系统', npmName: '@cyfmkgruop/vue-element-admin', version: '4.4.0' }
];
class projectController extends Controller {
  async template() {
    const { ctx } = this;
    ctx.body = ADD_TEMPLATE;
  }
}

module.exports = projectController;
