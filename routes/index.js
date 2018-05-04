var express = require('express');
var router = express.Router();
var home = require('../google-home');

/* GET home page. */
router.get('/', function(req, res, next) {
  var message = req.query.message;
  var result = {
    "result" : message
  };
  home.say(message);
  res.json(result);
});

module.exports = router;
