var express = require('express');
var core = require('./core');
var wechat = require('./wechat');
var ourstory = express();

ourstory.set('views','./view');
ourstory.set('view engine', 'jade');

ourstory.use('/', core);

ourstory.use('/wechat', wechat);

var server = ourstory.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('ourstory listening at http://%s:%s', host, port);

});
