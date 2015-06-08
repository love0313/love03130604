var wechat = require('wechat');
var express = require('express');
var wx = express.Router();

var config = {
  token: 'Judy313',
  appid: 'wxff2f138e726bc6e5',
  encodingAESKey: 'Ods7PKQUlVkRUOKUnPZF1VbKFq0lOGZo9qxisDFlOup'
};

wx.use(express.query());
wx.use('/', wechat(config, function (req, res, next) {
  var message = req.weixin;
  res.reply([
             {
               title: '我们的故事',
               description: '记录我们生活的点点滴滴~~',
               picurl: 'http://117.121.25.75/res/img/love.jpg',
               url: 'http://117.121.25.75:81/'
             }
           ]);
}));

module.exports = wx;