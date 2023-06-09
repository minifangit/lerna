# `cli`

> TODO: description

## Usage

```
const cli = require('cli');

// TODO: DEMONSTRATE API
```

### 初始化目录

- > cli-common ：lerna init
- > cli-common ：lerna create cli
- cd cli -> npm link 测试：> cli-common/cli： common-lerna-cli （bin 命令）
- > cli-common：lerna add import-local packages/cli 安装 import-local 到 packages/cli 项目
- > cli-common：lerna add npmlog packages/cli 日志
- > cli-common：lerna add commander packages/cli commander 交互命令脚手架

- > cli-common：lerna create command 创建项目 command
- > cli-common：lerna create init 创建项目 init
- > cli-common：lerna add @cyfmkgruop/cli-common-command packages/init 在 init 项目中添加@cyfmkgruop/cli-common-command
- > cli-common：lerna add @cyfmkgruop/cli-common-init packages/cli 在 cli 项目中添加@cyfmkgruop/cli-common-init

- 日志封装-----------------------
- > cli-common：lerna create utils 创建项目 utils
- > cli-common：lerna add npmlog packages/utils 【utils 项目项目下安装 npmlog】
- > cli-common：lerna add @cyfmkgruop/cli-common-utils packages/cli 【cli 项目项目下安装 @cyfmkgruop/cli-common-utils】
- > cli-common：lerna add @cyfmkgruop/cli-common-utils packages/init 【init 项目项目下安装 @cyfmkgruop/cli-common-utils】
  > 测试： 执行 common-lerna-cli init aaa

- node 最低版本检查
- > cli-common：lerna add semver packages/cli 【cli 项目下安装版本比较】

- chalk
- > cli-common：lerna add chalk packages/cli 【cli 项目下安装版本比较】

- 修改为 esm
- > cli-common：lerna add fs packages/cli
- > cli-common：lerna add fs packages/cli
- > cli-common：lerna add path packages/cli

- 添加 jest 测试
- > cli-common：lerna add jest packages/cli --dev 【dev 环境安装 jest】jest 默认集成 babel
- > cli-common：lerna add execa packages/cli --dev 【dev 环境安装 execa】 execa 传递命令和参数来运行外部命令

- 发布+安装
- > /cli-common/packages/utils> :npm publish 【发布 utils 到 npm】
- > /cli-common/packages/command> npm publish 【发布 command 到 npm】
- > /cli-common/packages/init> npm publish 【发布 init 到 npm】
- > /cli-common/packages/cli> npm i 【安装 cli 的依赖】
- > 执行命令：common-lerna-cli init aaa

### 配置文件 字段解释

package.json

- directories"键用于告诉 npm 应该在哪里找到特定的目录，例如"lib"目录和"test"目录
- "files"键规定哪些文件将包含在发布的 npm 包中

commander

- command：主要用来指定将要进行的操作（例如创建一个新项目、启动开发环境等）
- Options：则用于指定具体的设置（例如项目名称、端口号、开启热更新等）。
