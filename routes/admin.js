var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('stu_msg_admin', { title: 'Student Message Admin' });
});

router.get('/get_all_message', function(req, res, next){
  var allMessage = [
    {name: '李惠康', sex: '男', age: '21', duanwei: '青铜五', ID: '冷咖啡'},
    {name: '冷恒瑞', sex: '男', age: '21', duanwei: '青铜五', ID: '鸟大才是王道'},
    {name: '袁凡', sex: '男', age: '21', duanwei: '青铜五', ID: '猫寻欢'},
    {name: '娄坤恒', sex: '男', age: '21', duanwei: '青铜五', ID: '雪粒儿'},
    {name: '同行', sex: '男', age: '21', duanwei: '青铜五', ID: '妄言之SB'},
    {name: '李童', sex: '男', age: '21', duanwei: '青铜五', ID: '不记得'},
    {name: '大禽', sex: '男', age: '21', duanwei: '青铜五', ID: '流言蜚语'},
    {name: '何浪', sex: '男', age: '21', duanwei: '最强王者', ID: 'Lvily...Alberte'},
  ];
  
  res.json({allMessage: allMessage});
});
module.exports = router;
