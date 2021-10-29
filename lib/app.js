const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const { method, path, body } = parseRequest(data.toString());

    // if request is / path return plain text "hi"
    if(path === '/'){
      socket.write(createResponse({ body: 'hi', status: '200 Okay', contentType: 'text/plain' }));
    }

    // if request is /echo path & post method return status code 200 and plain text the request body

    // if request is /red path and get method, return html with an h1 html element/tag and the word red.

    // if request is /green path and get method, return html with an h1 html element/tag and the word green.

    // if request is /blue path and get method, return html with an h1 html element/tag and the word blue.

    // else....
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
