import {createServer} from 'node:http';

// define request handler

// create HTTP server
const server = createServer((req, res) => {
    console.log(req.url);
    if(req.url.includes('create')) {
          // create file
          writeFile('./hello.html', '<h1>Learning Node.js</h1>', (err) => {
            console.log(err);
            //   return response
            res.writeHead(200, {'content-type': 'text/html'});
            res.end('<h1>File added<h1/>');
        });   
    } else {
            // delete file
            unlink('./hello.html', () => {
            // return response
            res.writeHead(200, {'content-type': 'text/html'});
            res.end('<h1>File deleted<h1/>');
        });
    }
});
// Listen for incoming request
server.listen(3000, '127.0.0.1', () => {
    console.log('server is running');

});
// Arrow Function
const handleRequest = () => {}
// the `this` keyword behaves abnormally with the normal function but normal with the arrow function