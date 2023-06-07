class Command {
  constructor(instance) {
    if (!instance) {
      throw new Error('command instance must not be null');
    }

    this.program = instance;

    const cmd = this.program.command(this.command); //具体的命令
    cmd.description(this.description); //描述

    //hook 钩子函数
    cmd.hook('preAction', () => {
      this.preAction();
    });
    cmd.hook('postAction', () => {
      this.postAction();
    });

    //处理option
    if (this.options?.length > 0) {
      this.options.forEach((item) => {
        cmd.option(...item);
      });
    }
    //actions
    cmd.action((...params) => {
      //...params => name, opts
      this.cmdAction(params); //params => [name, opts]
    });
  }

  get command() {
    throw new Error('command must be implements');
  }
  get description() {
    throw new Error('description must be implements');
  }
  get options() {
    return [];
  }
  cmdAction(params) {
    throw new Error('action must be implements');
  }
  preAction() {}
  postAction() {}
}
module.exports = Command;
