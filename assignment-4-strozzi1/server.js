var http = require('http');

http.createServer(function(req, res){
  //var content = ""
  res.write('Hello World!');
  res.end();
}).listen(8080);
