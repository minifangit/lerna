import { log, isDebug } from '@cyfmkgruop/cli-common-utils';
//注册一个全局的未捕获异常处理器。当一个异常没有被任何 try-catch 块捕获时，它会被传递到这个处理器，再由这个处理器来处理异常
function printLog(e, type) {
  if (isDebug()) {
    log.verbose(type, e);
  } else {
    // log.info(type, e.message);
    log.error(type, e.message);
  }
}
//捕获正常的错误 eg：throw new Error
process.on('uncaughtException', (e) => printLog(e, 'error'));
//捕获promise错误,eg：.then的throw new Error
process.on('unhandledRejection', (e) => printLog(e, 'promise'));
