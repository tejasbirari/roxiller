const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Transactions = new mongoose.Schema({

    id: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },  

    price: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    sold: {
        type: String,
        required: true,
    },

    dateOfSale: {
        type: String,
        required: true,
    },

})

Transactions.plugin(mongoosePaginate);

module.exports = mongoose.model("Transactions", Transactions);