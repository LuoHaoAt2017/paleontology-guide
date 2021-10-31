const express = require('express');
const router = require('./routes');
const config = require('./config');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9090");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
  res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST,OPTIONS,HEAD,CONNECT,TRACE,PATCH");
  next();
});

app.use(jwt({ secret: config.secret, algorithms: ['HS256'] }).unless({
  path: [{
    url: '/login',
    methods: ["POST","OPTIONS","HEAD","CONNECT","TRACE","PATCH"]
  }, {
    url: '/register',
    methods: ["PUT","OPTIONS","HEAD","CONNECT","TRACE","PATCH"]
  }]
}));

app.use('/', router);

app.listen(5000, 'localhost', function() {
  console.log('request is comming');
});