var http = require('http');

var express = require('express');

var server = http.createServer(function (request, response) {
    if (request.url === "/editar") {
        response.end(
            '<html><head charset="utf-8"></head><body><h1>Welcome to Bilola Master - Editar</h1></body></html>'
        );
    } else {
        response.end(
            '<html><head charset="utf-8" ></head><body><h1>Welcome to Bilola Master</h1></body></html>'
        );
    }
});

server.listen(3000);
console.log('Servidor no ar');