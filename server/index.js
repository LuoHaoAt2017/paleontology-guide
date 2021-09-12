const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.urlencoded());
app.use(express.json());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST,OPTIONS");
  next();
});

app.use('/', router);

app.listen(5000, 'localhost', function() {
  console.log('request is comming');
});