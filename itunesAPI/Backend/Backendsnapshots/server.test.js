const request = require('supertest');
const express = require('express');

const app = express();

app.get('/api/search/:entity/:term', async (req, res) => {
  const entity = req.params.entity;
  const term = req.params.term;
  const result = await fetch(`https://itunes.apple.com/search?term=${term}&entity=${entity}&limit=50`);
  const data = await result.json();
  res.send(data);
});

describe('Test the /api/search/:entity/:term path', () => {
  test('It should respond with 200 status code', async () => {
    const response = await request(app).get('/api/search/song/abba');
    expect(response.statusCode).toBe(200);
  });
});
