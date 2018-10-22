const http = require('http')
const url = require('url')
const math_ops = require('./math_operations')

var server = http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url, true)

  if(parsedUrl.pathname === '/fibonacci') {
    var num = math_ops.fibonacci(parsedUrl.query)
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify({result:num}));
  }
})

server.listen(9000)