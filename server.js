var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, { root: "/"});
  response.end();
});

server.listen(8080);
