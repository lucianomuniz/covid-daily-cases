const mongoose = require('mongoose');

const variantsSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  numSequences: {
    type: Number,
    required: true,
  },
  percSequences: {
    type: Number,
    required: true,
  },
  numSequencesTotal: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Variant', variantsSchema);
