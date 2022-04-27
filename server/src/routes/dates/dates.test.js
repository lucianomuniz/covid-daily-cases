const request = require('supertest');
const app = require('../../app');
const { loadVariantsData } = require('../../models/variants.model');
const { mongoConnect, mongoDisconnect } = require('../../services/mongo');

describe('Dates API', () => {
  beforeAll(async () => {
    await mongoConnect();
    // await loadVariantsData();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe('Test GET /v1/', () => {
    test('It should respond with 200 success', async () => {
      const message = {
        message: 'Backend Challenge 2022 🏅 - Covid Daily Cases',
      };
      const response = await request(app)
        .get('/v1/')
        .expect('Content-Type', /json/)
        .expect(200);
      expect(response.body).toMatchObject(message);
    });
  });

  describe('Test GET /v1/dates', () => {
    test('It should respond with 200', async () => {
      const response = await request(app)
        .get('/v1/dates')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
