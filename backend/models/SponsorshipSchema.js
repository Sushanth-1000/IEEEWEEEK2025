const mongoose = require('mongoose');

const SponsorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
    get: (v) => v.startsWith('http') ? v : `https://ieeeweek2025.onrender.com/images/${v}`
  },
  category: {
    type: String,
    required: true,
    enum: ['Title', 'Diamond', 'Gold', 'Silver', 'Bronze'],
    default: 'Bronze'
  }
}, {
  timestamps: true,
  toJSON: { getters: true },
  toObject: { getters: true }
});

module.exports = mongoose.model('Sponsor', SponsorSchema);