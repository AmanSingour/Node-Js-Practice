// * User Define Module
var md = require("./02-MyFirstModule");

// * Built-in Module
var http = require('http');

http.createServer( function(req, res){
    res.writeHead(200, {
         "Content-Type" : "text/html"
    });
    res.end(md.myDateTime());
}).listen(8080);