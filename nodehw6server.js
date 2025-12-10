const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('pageLoaded', function(pageName) {
    console.log("Page loaded successfully: " + pageName);
});

const server = http.createServer(function(req, res) {

    let page = req.url.substring(1);

    if (page === "") {
        page = "about"; 
    }

    const fileName = page + ".html";

    fs.readFile(fileName, function(err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 - Page Not Found</h1>");

            console.log("Page not found: " + fileName);
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);

            myEmitter.emit("pageLoaded", fileName);
        }
    });

});

server.listen(3000, function() {
    console.log("Server running at http://localhost:3000/");
});