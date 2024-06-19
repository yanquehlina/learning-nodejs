import {createServer} from 'node:http';

// define request handler

// create HTTP server
const server = createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>we have an HTTTP Server<h1/>');

});

// Listen for incoming request
server.listen(3000, '127.0.0.1', function() {
    console.log('server is running');
});

// Normal function VS Arrow Function
function handleRequest() {}
const handleRequest = () => {}
// the `this` keyword behaves abnormally with the normal function but normal with the arrow function