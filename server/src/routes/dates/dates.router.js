const express = require('express');

const { httpGetAllDates } = require('./dates.controller');

const datesRouter = express.Router();

datesRouter.get('/', httpGetAllDates);

module.exports = datesRouter;
