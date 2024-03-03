const Transactions = require('../database/models/Transactions');

const getBarChart = async(req, res) => {
    try {
        const {month} = req.query;
        const monthNumber = parseInt(month);

        const chartInfo = await Transactions.find();

        let maxPrice = 0;
        const priceRangeCounts = {
            range: [],
            itemsSold: []
        };


        const resultArray =  chartInfo
        .filter(date => {
            const dateObject = new Date(date.dateOfSale);
            const transactionMonth = dateObject.getMonth() + 1;
            return transactionMonth === monthNumber;
        })

        resultArray.map((result) => {
            if(result.sold === 'true'){
                maxPrice = result.price;
            }
        })

        for(let i=0; i<=maxPrice; i+=100){
            const startRange = i;
            const endRange = i+100;
            const totalRange = `${startRange} - ${endRange}`
            const itemsSold = resultArray.filter(result => result.price >= startRange && result.price < endRange).length;
            priceRangeCounts.range.push(totalRange);
            priceRangeCounts.itemsSold.push(itemsSold);
        }

        return res.json(priceRangeCounts);

    } catch (error) {
        console.error('Error fetching bar chart:', error);
        res.status(500).json({ error: 'Failed to fetch chart' });
    }
} 

const getPieChart = async(req, res) => {
    try {
        const {month} = req.query;
        const monthNumber = parseInt(month);
        
        const chartInfo = await Transactions.find();

        let categoryItemsCount = {
            category: [],
            items: []
        };
        const resultArray =  chartInfo
        .filter(date => {
            const dateObject = new Date(date.dateOfSale);
            const transactionMonth = dateObject.getMonth() + 1;
            return transactionMonth === monthNumber;
        })

        resultArray.forEach(result => {
            const category = result.category;
            if (!categoryItemsCount.category.includes(category)) {
                categoryItemsCount.category.push(category);
                categoryItemsCount.items.push(1);
            } else {
                const index = categoryItemsCount.category.indexOf(category);
                categoryItemsCount.items[index]++;
            }
        });

        return res.json(categoryItemsCount);



    } catch (error) {
        console.error('Error fetching pie chart:', error);
        res.status(500).json({ error: 'Failed to fetch pie chart' });
    }
}

module.exports = { getBarChart, getPieChart }