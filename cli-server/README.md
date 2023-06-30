# my

```
普通定义接口方式
router.get('/project/template', controller.project.template);
访问：***/project/template
```

```
 RESTful 方式：
 router.resources('posts', '/v1/project', controller.v1.project); //v1是文件夹名
 访问：***/v1/project
```

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
