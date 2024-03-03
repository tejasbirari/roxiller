const Transactions = require('../database/models/Transactions');

const getTransactions = async(req, res) => { 
    try {
        const pageNumber = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const {search, month} = req.query;

        const query = {}

        if(month){
          const monthNumber = parseInt(month);

          const table = await Transactions.find();
          const resultArray =  table.filter(date => {
              const dateObject = new Date(date.dateOfSale);
              const transactionMonth = dateObject.getMonth() + 1;
              return transactionMonth === monthNumber;
          })

          if(search){
            const filteredResults = resultArray.filter(item =>
              ['title', 'description', 'price', 'category', 'sold', 'dateOfSale'].some(key =>
                item[key].includes(search)
              )
            );
            query.$or = filteredResults;
          }else{
            query.$or = resultArray;
          }
        }

        // mongoose-paginate-v2 plugin to paginate transactions
        Transactions.paginate(query, { page: pageNumber, limit: pageSize }, (err, result) => {
            if (err) {
              return res.status(500).json({ message: 'Error occurred while fetching transactions.' });
            }
            const { docs, totalDocs, limit, page, pages } = result;
            return res.json({ transactions: docs, totalDocs, limit, page, pages });
        });
          
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
}

module.exports = { getTransactions }
