const express = require('express');

const casesRouter = require('./cases/cases.router');
const datesRouter = require('./dates/dates.router');

const api = express.Router();

api.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Backend Challenge 2022 🏅 - Covid Daily Cases',
  });
});
api.use('/cases', casesRouter);
api.use('/dates', datesRouter);

module.exports = api;
