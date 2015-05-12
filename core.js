var express = require('express');
var core = express.Router();

core.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

core.get('/', function(req, res) {
  res.send('我们的故事');
});

core.get('/about', function(req, res) {
  res.send('About 我们的故事');
});

module.exports = core;
