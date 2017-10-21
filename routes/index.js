var express = require('express');
var router = express.Router();
var logger = require('./../util/BunyanLog.js').GetLogger();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/notIE', function(req, res, next) {
  res.render('notIE',{title:'浏览器不支持',desc:'本站不兼容IE，请使用非IE浏览器！推荐使用Chrome浏览器。'});
});

router.get('/workbench', function(req, res, next) {
	logger.info('workbench')
  res.render('workbench');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/news', function(req, res, next) {
  res.render('news');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/camp', function(req, res, next) {
  res.render('camp');
});

router.get('/doctor', function(req, res, next) {
  res.render('doctor');
});

module.exports = router;
