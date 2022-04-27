const { getAllDates } = require('../../models/variants.model');

async function httpGetAllDates(req, res) {
  return res.status(200).json(await getAllDates());
}

module.exports = {
  httpGetAllDates,
};
