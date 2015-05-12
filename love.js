var express = require('express');
var core = require('./core');
var app = express();

app.use('/', core);

var server = app.listen(81, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('ourstory listening at http://%s:%s', host, port);

});
