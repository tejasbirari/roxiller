const axios = require('axios')
const Transactions = require('../database/models/Transactions');


const initializeDatabase = async(req, res) => {
    try {
        // Fetch Data from API
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data;

        // Insert data into database
        await Transactions.insertMany(transactions);

    } catch (error) {
        console.error('Error initializing database:', error);
        res.status(500).json({ error: 'Failed to initialize database' });
    }
}

module.exports = { initializeDatabase }