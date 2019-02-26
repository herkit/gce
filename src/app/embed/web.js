'use strict';

const express = require('express');
const router = express.Router();

router.get("/:site", (req, res, next) => { 
  res.send("This is the embed data for site " + req.params['site']) 
});


module.exports = router;