var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '织心-益起来' , desc : '四川织心志愿者高校联盟'});
});

module.exports = router;
