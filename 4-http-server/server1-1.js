const http = require('http');

const server = http.createServer((req, res) => {
    // 응답
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080);

server.on('listening', () => {
    console.log('Waiting on 8080');
});

server.on('error', (error) => {
    console.error(error);
});