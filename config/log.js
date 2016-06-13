var winston = require('winston');
var customLogger = new winston.Logger();
// A console transport logging debug and above.
customLogger.add(winston.transports.Console, {
  level: 'info',
  colorize: true
});
customLogger.add(winston.transports.File, {
  // A file based transport logging only errors formatted as json.
  json: true,
  level: 'error',
  filename: 'tp-errors.log'
});
module.exports.log = {
  // Pass in our custom logger, and pass all log levels through.
  level: 'info',
  inspect: false,
  custom: customLogger
  // Disable captain's log so it doesn't prefix or stringify our meta data.
};
