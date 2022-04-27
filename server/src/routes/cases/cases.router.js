const express = require('express');

const {
  httpGetCasesByDate,
  httpGetCumulativeCasesByDate,
} = require('./cases.controller');

const casesRouter = express.Router();

casesRouter.get('/:date/count', httpGetCasesByDate);
casesRouter.get('/:date/cumulative', httpGetCumulativeCasesByDate);

module.exports = casesRouter;
