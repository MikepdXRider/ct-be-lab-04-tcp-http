module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `HTTP/1.1 ${status}\r
Accept-Ranges: bytes\r
Content-Length: ${body.length}\r
Content-Type: ${contentType}\r
\r
${body}`;
};
