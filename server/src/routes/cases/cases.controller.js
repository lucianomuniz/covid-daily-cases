const {
  getCasesByDate,
  getCumulativeCasesByDate,
  getAllDates,
} = require('../../models/variants.model');

async function httpGetCasesByDate(req, res) {
  const cases = await getCasesByDate(req.params.date);
  return res.status(200).json(cases);
}

async function httpGetCumulativeCasesByDate(req, res) {
  const cases = await getCumulativeCasesByDate(req.params.date);
  return res.status(200).json(cases);
}

async function httpGetAllDates(req, res) {
  const dates = await getAllDates();
  return res.status(200).json(dates);
}

module.exports = {
  httpGetCasesByDate,
  httpGetCumulativeCasesByDate,
  httpGetAllDates,
};
