var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<script>window.location.replace("https://youtu.be/dQw4w9WgXcQ");</script>');
}).listen(process.env.PORT);
