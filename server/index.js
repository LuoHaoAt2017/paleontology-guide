const express = require('express');

const app = express();

app.listen(8080, 'localhost', function() {
  console.log('request is comming');
});