const express = require('express');
const router = express.Router();
const { getStatistics } = require('../controller/Statistics')

router.get('/', getStatistics);

module.exports = router