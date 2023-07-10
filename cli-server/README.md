# my

### 创建

- npm init egg --type=simple

### 定义接口

```
>普通定义接口方式
router.get('/project/template', controller.project.template);
访问：***/project/template
```

```
 RESTful 方式：
 router.resources('posts', '/v1/project', controller.v1.project); //v1是文件夹名
 访问：***/v1/project
```

## 操作数据库

- egg-mongoose 插件
- mode->project.js：定义数据表
- v1->project.js 读取数据库的值
  注意：ctx.model.Project.find();
  默认情况下会在 collections 后面加上 s,如 project，实际查询的是 projects
  从数据库中获取数据，读取的表名对应的是 projects，后端带了一个 s

# cli-server

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org
