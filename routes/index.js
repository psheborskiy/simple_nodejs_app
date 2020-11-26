var express = require('express');
var router = express.Router();

const redis = require("redis");

/* GET home page. */
router.get('/', function(req, res, next) {
  const client = redis.createClient();
  client.set("test_key", "my_value", redis.print);

  res.render('index', { title: 'Express' });
});

module.exports = router;
