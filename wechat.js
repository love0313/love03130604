var wechat = require('wechat');
var config = {
  token: 'Judy313',
  appid: 'wxff2f138e726bc6e5',
  encodingAESKey: 'Ods7PKQUlVkRUOKUnPZF1VbKFq0lOGZo9qxisDFlOup'
};

app.use(express.query());
app.use('/wechat', wechat(config, function (req, res, next) {
  var message = req.weixin;
  res.reply({
      type: "music",
      content: {
        title: "我们的故事",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3",
        thumbMediaId: "thisThumbMediaId"
      }
    });
}));
