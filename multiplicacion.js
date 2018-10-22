const http = require('http')
const url = require('url')
const math_ops = require('./math_operations')

var server = http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url, true)

  if(parsedUrl.pathname === '/multi') {
    math_ops.multi(parsedUrl.query, response)
  }
})

server.listen(9000)
