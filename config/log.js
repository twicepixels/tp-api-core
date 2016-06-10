var winston = require('winston');
var customLogger = new winston.Logger();
// A console transport logging debug and above.
customLogger.add(winston.transports.Console, {
  level: 'silly',
  colorize: true
});

// A file based transport logging only errors formatted as json.
// customLogger.add(winston.transports.File, {
//   json: true,
//   level: 'error',
//   filename: 'filename.log'
// });
module.exports.log = {
  // Pass in our custom logger, and pass all log levels through.
  level: 'silly',
  inspect: false,
  custom: customLogger
  // Disable captain's log so it doesn't prefix or stringify our meta data.
};
