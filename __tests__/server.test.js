const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('APIServer', () => {
  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello World!!!!');
  });

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });

  it('works with query params and the "/person" route', async () => {
    const response = await request.get('/person?name=Seth');

    expect(response.body).toEqual({'name': 'Seth'});
    expect(response.status).toBe(200);
  });

  it('gives correct error when no name is inputted and the "/person" route', async () => {
    const response = await request.get('/person');

    expect(response.status).toBe(500);
  });
});
