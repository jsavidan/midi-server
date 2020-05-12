var express = require('express');
var app = express();

// Midi Server for Super Cloud Breakout
//
// it's time to serve some raw-base64-encode-music ;)
//

app.get('/', function (req, res) {
  res.send("Work in progress")
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
