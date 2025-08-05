const Url = require('../models/urlModels');

const { nanoid } = require('nanoid');

const BASE_URL = 'https://url-shortener-system-sb03.onrender.com';

exports.createShortUrl = async (req, res) => {
  const { longUrl, customCode, expiresAt } = req.body;

  if (!longUrl) return res.status(400).json({ error: 'longUrl is required' });

  const shortId = customCode || nanoid(6);
  const shortUrl = `${BASE_URL}/${shortId}`;

  const exists = await Url.findOne({ shortId });
  if (exists) return res.status(409).json({ error: 'Short code already in use' });

  const url = new Url({
    shortId,
    shortUrl,
    longUrl,
    redirectedUrl: longUrl,
    expiresAt: expiresAt || null,
  });

  await url.save();
  res.status(201).json({ shortUrl });
};

exports.redirectToLongUrl = async (req, res) => {
  const { shortId } = req.params;

  const urlDoc = await Url.findOne({ shortId });
  if (!urlDoc) return res.status(404).send('URL not found');

  if (urlDoc.expiresAt && new Date() > urlDoc.expiresAt) {
    return res.status(410).send('This link has expired');
  }

  urlDoc.clicks += 1;
  urlDoc.visitHistory.push({ timestamp: Date.now() });
  await urlDoc.save();

  res.redirect(urlDoc.redirectedUrl);
};

exports.getAnalytics = async (req, res) => {
  const { shortId } = req.params;

  const urlDoc = await Url.findOne({ shortId });
  if (!urlDoc) return res.status(404).json({ error: 'Short URL not found' });

  res.json({
    shortUrl: urlDoc.shortUrl,
    longUrl: urlDoc.longUrl,
    clicks: urlDoc.clicks,
    createdAt: urlDoc.createdAt,
    expiresAt: urlDoc.expiresAt,
    visitHistory: urlDoc.visitHistory,
  });
};
