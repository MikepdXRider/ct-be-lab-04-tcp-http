const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('get method, / path', async() => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });


  it('post method, /echo path', async() => {
    const res = await request(app)
      .post('/echo')
      .send({ 'name': 'ranObj', 'purpose': 'test' });

    expect(res.text).toEqual({ name: 'ranObj', purpose: 'test' });
    expect(res.status).toEqual(200);
  });


  it('get method, /red path', async() => {
    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });


  it('get method, /green path', async() => {
    const res = await request(app)
      .get('/green');

    expect(res.text).toEqual('<h1>green</h1>');
  });


  it('get method, /blue path', async() => {
    const res = await request(app)
      .get('/blue');

    expect(res.text).toEqual('<h1>blue</h1>');
  });


  it('get method, /random path', async() => {
    const res = await request(app)
      .get('/random');

    expect(res.text).toEqual(`<!DOCTYPE html>
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
    </html>`);
    expect(res.status).toEqual(404);
  });
});
