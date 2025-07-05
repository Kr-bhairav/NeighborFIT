const mongoose = require('mongoose');

const NeighborhoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  affordability: Number,
  safety: Number,
  nightlife: Number,
  internet: Number,
  greenery: Number,
  education: Number,
  description: String
});

module.exports = mongoose.model('Neighborhood', NeighborhoodSchema);
