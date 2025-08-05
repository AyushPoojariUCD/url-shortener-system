const express = require('express');
const router = express.Router();
const {
  createShortUrl,
  redirectToLongUrl,
  getAnalytics
} = require('../controllers/urlController');

// POST /shorten
router.post('/shorten', createShortUrl);

// GET /:shortId
router.get('/:shortId', redirectToLongUrl);

// GET /analytics/:shortId
router.get('/analytics/:shortId', getAnalytics);

module.exports = router;
