var express = require('express');
var core = require('./core');
var ourstory = express();

ourstory.set('views','./views');
ourstory.set('view engine', 'jade');

ourstory.use('/', core);

var server = ourstory.listen(81, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('ourstory listening at http://%s:%s', host, port);

});