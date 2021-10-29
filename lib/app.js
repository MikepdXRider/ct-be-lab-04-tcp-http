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
    if(path === '/echo'){
      socket.write(createResponse({ body: `${body}`, status: '200 Okay', contentType: 'text/plain' }));
    } 

    // if request is /red path and get method, return html with an h1 html element/tag and the word red.
    if(path === '/red'){
      socket.write(createResponse({ body: '<h1>red</h1>', status: '200 Okay', contentType: 'text/plain' }));
    } 

    // if request is /green path and get method, return html with an h1 html element/tag and the word green.
    if(path === '/green'){
      socket.write(createResponse({ body: '<h1>green</h1>', status: '200 Okay', contentType: 'text/plain' }));
    } 

    // if request is /blue path and get method, return html with an h1 html element/tag and the word blue.
    if(path === '/blue'){
      socket.write(createResponse({ body: '<h1>blue</h1>', status: '200 Okay', contentType: 'text/plain' }));
    } 
    // else....
    socket.end(createResponse({ body: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Not Found</title>
    </head>
    <body>
        Not Found :(
    </body>
    </html>`, status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
