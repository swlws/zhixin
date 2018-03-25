var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var logConfig = require('./util/MorganLog.js');
var logger = require('./util/BunyanLog.js').GetLogger();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

process.env.port = 8080;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use('/zhixin',favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/zhixin',morgan(logConfig.format,logConfig.options));
app.use('/zhixin',bodyParser.json());
app.use('/zhixin',bodyParser.urlencoded({ extended: false }));
app.use('/zhixin',cookieParser());
app.use('/zhixin',express.static(path.join(__dirname, 'public')));

logger.info('app start')

app.use('/zhixin', index);
app.use('/zhixin/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  logger.error(err);
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  logger.error(err);
  res.render('error');
});

module.exports = app;
