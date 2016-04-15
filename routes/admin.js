var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('stu_msg_admin', { title: 'Student Message Admin' });
});

module.exports = router;
