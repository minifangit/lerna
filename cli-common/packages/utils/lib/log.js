//日志
const log = require('npmlog');
const isDebug = require('./isDebug');
//默认的level是info级别
if (isDebug()) {
  log.level = 'verbose';
} else {
  log.level = 'info';
}
log.heading = 'lerna cli';
log.addLevel('success', 2000, { fg: 'green', bg: 'red', bold: true });

module.exports = log;
