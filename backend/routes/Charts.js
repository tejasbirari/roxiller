const express = require('express');
const router = express.Router();
const { getBarChart, getPieChart } = require('../controller/Charts');

router.get('/bar', getBarChart);
router.get('/pie', getPieChart);

module.exports = router;