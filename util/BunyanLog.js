var path = require('path');
var bunyan = require('bunyan');
var tool = require('./Tool.js');
var config = require(path.join(__dirname,'..','config','config.json')).log.bunyan;

var logDir = path.join(__dirname,'..','..','work','log');
tool.mkdir(logDir);

var Log = bunyan.createLogger({
    src: true,
    name: 'zhixin',
    streams: [{
            type: 'rotating-file',
            level: 'error',           
			path:path.join(logDir,'log_error.log'),	// 日志输出到文件
            period: '1d', // daily rotation
            count: 3 // keep 3 back copies
        },
        {
            type: 'rotating-file',
            level: config.level === undefined ? 'info' : config.level,
			path:path.join(logDir,'log_info.log'),	// 日志输出到文件
            period: '1d', // daily rotation
            count: 3 // keep 3 back copies
        }
    ]
});

Log.shouldTrace = function () {
    return Log.level() <= bunyan.TRACE;
};

Log.shouldDebug = function () {
    return Log.level() <= bunyan.DEBUG;
};

Log.shouldInfo = function () {
    return Log.level() <= bunyan.INFO;
};

Log.shouldWarn = function () {
    return Log.level() <= bunyan.Warn;
};

Log.shouldError = function () {
    return Log.level() <= bunyan.ERROR;
};

Log.shouldFatal = function () {
    return Log.level() <= bunyan.FATAL;
};

module.exports.GetLogger = function () {
    return Log;
};