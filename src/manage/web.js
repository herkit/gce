'use strict';

const express = require('express');
const oauth2 = require('../lib/oauth2');

const router = express.Router();

router.get('/manage', oauth2.required, (req, res, next) => {
  res.json(req.session);
})

module.exports = router;
