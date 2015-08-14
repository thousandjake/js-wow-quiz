var express = require('express');
var app = express();

app.use(express.static('static'));
app.use(express.static('styles'));
app.use(express.static('src'));
app.use(express.static('node_modules'));

app.get('/', function(req, res){
  var path = __dirname+"/static/index.html";
  res.sendFile(path);
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log(__dirname);
});
