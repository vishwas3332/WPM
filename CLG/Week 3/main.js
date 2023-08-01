var http = require("http");
http.createServer(function(request,response){
    // senf the http header
    // HTTP status : 200 : OK
    // Content Type : text/plain
    response.writeHead(200,{'content-type':'text/html'})
    response.write('<h1>Welcome</h1>')
    response.end('Hello World\n')
}).listen(8081);
console.log('Server is running on Port: http://127.0.0.1:8081')