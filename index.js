/*
var http = require('http');

var server = http.createServer();  // alternative // var server = http.createServer(function (request, response) {});
server.on('request', function (request, response) {
	response.write('Hello world!');
	response.write('<h1>This is awesome!</h1>');
	response.end();
});

server.listen(9000);
*/
/*
var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
        response.end();
    } else {
        response.statusCode = 404;
        response.write('<h1>404: Zła ścieżka!</h1>');
        response.end();
    }
});

server.listen(8080);
*/

var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) { 
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function(err, data) {
        	response.setHeader("Content-Type", "text/html; charset=utf-8");
        	response.write(data);
        	response.end();
        });
    } else {
        response.statusCode = 404;
        fs.readFile('./error404.jpg', function(err, data) {
        	response.setHeader("Content-Type", "image/jpeg");
        	response.write(data);
        	response.end();
    	});
    }
});

server.listen(8080);
