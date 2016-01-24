var express = require('express');
var app = express();

app.use(express.static('styles'));
app.use(express.static('src'));
app.use(express.static('bower_components'));

app.get('/*', function(req, res, next){
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
});

app.get('/', function(req, res){
  var path = __dirname+"/static/index.html";
  res.sendFile(path);
});

app.get('/questions.json', function(req, res){
  res.sendFile(__dirname+"/static/questions.json");
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log(__dirname);
});
