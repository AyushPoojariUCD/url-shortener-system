const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  redirectedUrl: {
    type: String,
    required: true,
  },
  longUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    default: null,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  visitHistory: [{ timestamp: { type: Date } }],
  }, {
  timestamps: true
});

const URL = mongoose.model('url', urlSchema);

module.exports = URL;
