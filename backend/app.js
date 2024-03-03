const express = require('express');
const app = express();
const PORT = 5000;
const database = require('./database/Connection');
const cors = require('cors');

app.use(cors());

const DB_ROUTE = require('./routes/initializeDB');
const TRANSACTION_ROUTE = require('./routes/Transactions');
const STATISTICS_ROUTE = require('./routes/Statistics');
const BAR_CHART_ROUTE = require('./routes/Charts');
const PIE_CHART_ROUTE = require('./routes/Charts');

app.use('/api/database/initialize_database', DB_ROUTE);
app.use('/api/transactions', TRANSACTION_ROUTE);
app.use('/api/statistics', STATISTICS_ROUTE);
app.use('/api/chart', BAR_CHART_ROUTE);
app.use('/api/chart', PIE_CHART_ROUTE);

const start = async() => {
    try {
        await database()
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log('Internal Server Error');
    }
}

start();