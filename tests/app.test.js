// app.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Express App', () => {
  it('should return Hello World on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });

  it('should return the sum of num1 and num2 on GET /add', async () => {
    const response = await request(app).get('/add?num1=5&num2=10');
    expect(response.status).toBe(200);
    expect(response.body.sum).toBe(15);
  });
});
