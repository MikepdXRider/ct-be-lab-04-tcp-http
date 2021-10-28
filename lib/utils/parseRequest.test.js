const parseRequest = require('./parseRequest');

describe('parseRequest', () => {
  it('parses a raw request', () => {
    const rawRequest = `GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr`;
    const request = parseRequest(rawRequest);

    expect(request).toEqual({
      method: 'GET',
      path: '/'
    });
  });

  it('parses a raw request with a body', () => {
    const rawRequest = `POST / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr\r
\r
{"name":"spot"}`;
    const request = parseRequest(rawRequest);

    expect(request).toEqual({
      method: 'POST',
      path: '/',
      body: '{"name":"spot"}'
    });
  });
});
