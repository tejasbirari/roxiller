const express = require('express');
const { getTransactions } = require('../controller/Transactions');
const router = express.Router();

router.get('/', getTransactions);

module.exports = router;