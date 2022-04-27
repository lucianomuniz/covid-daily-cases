const request = require('supertest');
const app = require('../../app');
const { loadVariantsData } = require('../../models/variants.model');
const { mongoConnect, mongoDisconnect } = require('../../services/mongo');

describe('Cases API', () => {
  beforeAll(async () => {
    await mongoConnect();
    // await loadVariantsData();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe('Test GET /v1/cases/:date/count', () => {
    test('It should respond with 200', async () => {
      const response = await request(app)
        .get('/v1/cases/2020-07-06/count')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  describe('Test GET /v1/cases/:date/cumulative', () => {
    test('It should respond with 200', async () => {
      const response = await request(app)
        .get('/v1/cases/2020-07-06/cumulative')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
