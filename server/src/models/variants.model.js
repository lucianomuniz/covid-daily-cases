const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const variantsDataBase = require('./variants.mongo');

function loadVariantsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, '..', '..', 'data', 'covid-variants.csv')
    )
      .pipe(
        parse({
          columns: true,
        })
      )
      .on('data', async (data) => {
        saveVariantCase(data);
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', async () => {
        console.log('Variant cases loaded!');
        resolve();
      });
  });
}

async function saveVariantCase(variantCase) {
  const variant = {
    location: variantCase.location,
    date: variantCase.date,
    variant: variantCase.variant,
    numSequences: variantCase.num_sequences,
    percSequences: variantCase.perc_sequences,
    numSequencesTotal: variantCase.num_sequences_total,
  };

  try {
    await variantsDataBase.updateOne(variant, variant, { upsert: true });
  } catch (err) {
    console.error(`Could not save Covid case ${err}`);
  }
}

async function getCasesByDate(caseDate) {
  return await variantsDataBase
    .find({ date: caseDate }, { _id: 0, __v: 0 })
    .sort({ location: 1 });
}

async function getCumulativeCasesByDate(caseDate) {
  const requestDate = new Date(caseDate);
  return await variantsDataBase.aggregate([
    { $match: { date: requestDate } },
    {
      $group: {
        _id: '$location',
        count: {
          $count: {},
        },
      },
    },
    { $sort: { location: 1 } },
  ]);
}

async function getAllDates() {
  return await variantsDataBase.find({}, 'date').distinct('date');
}

module.exports = {
  loadVariantsData,
  getCasesByDate,
  getCumulativeCasesByDate,
  getAllDates,
};
