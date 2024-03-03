const express = require('express');
const { initializeDatabase } = require('../controller/InitializeDB');
const router = express.Router();

router.get('/', initializeDatabase);

module.exports = router;