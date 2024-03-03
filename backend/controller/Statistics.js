const Transactions = require('../database/models/Transactions');

const getStatistics = async(req, res) => {
    try {
        const { month } = req.query;
        const monthNumber = parseInt(month);
        
        const statistics = await Transactions.find();

        let totalSaleAmount = 0;
        let totalSoldItems = 0;
        let totalNotSoldItems = 0;

        const resultArray =  statistics
        .filter(date => {
            const dateObject = new Date(date.dateOfSale);
            const transactionMonth = dateObject.getMonth() + 1;
            return transactionMonth === monthNumber;
        })

        resultArray.map((result) => {
            totalSaleAmount += parseFloat(result.price);
            if(result.sold === 'true'){
                totalSoldItems += 1;
            } else {
                totalNotSoldItems += 1;
            }
        })

        return res.status(200).json({totalSaleAmount, totalSoldItems, totalNotSoldItems})

    } catch (error) {
        console.error('Error fetching statistics:', error);
        res.status(500).json({ error: 'Failed to fetch statistics' });
    }
}

module.exports = { getStatistics }