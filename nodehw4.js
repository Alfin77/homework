const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url; 

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to the Home Page!</h1>");
    }
    
    else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>This is a simple Node.js server.</h1>");
    }
    
    else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Contact us at contact@example.com</h1>");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});