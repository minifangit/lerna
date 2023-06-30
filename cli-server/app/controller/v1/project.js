const { Controller } = require('egg');

const ADD_TEMPLATE = [
  { name: 'vue3项目模板', npmName: '@cyfmkgruop/item-vue-template', value: 'vue-template', version: '0.0.0' },
  { name: 'react项目模板', npmName: '@cyfmkgruop/item-react-template', value: 'react-template', version: '0.0.0' },
  { name: 'vue后端管理系统', npmName: '@cyfmkgruop/vue-element-admin', value: 'element-admin', version: '4.4.0' }
];
class ProjectController extends Controller {
  //项目模板的查询
  //访问：/v1/project
  async index() {
    const { ctx } = this;
    ctx.body = ADD_TEMPLATE;
  }
  //根据id查询
  //访问：/v1/project/vue-template
  show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const template = ADD_TEMPLATE.find((_) => _.value === id);
    if (template) {
      ctx.body = template;
    } else {
      ctx.body = {};
    }
  }
  //新增
  create() {
    console.log('获取post请求的data参数', this.ctx.request.body);
  }
  //更新
  update() {}
  //删除
  destroy() {}
}

module.exports = ProjectController;
