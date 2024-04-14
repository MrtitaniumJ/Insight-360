const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SellerInfo', // seller ki id aayegi seller k db se 
        required: true
    },
    totalrevenue: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    networth: {
        type: Number,
        required: true
    },
    numberOfProducts: {
        type: Number,
        required: true
    },
    item: {
        type: String
    },
    categories: {
        type: [String]
    },
    expenditure: {
        type: [{
            orderCount: Number,
            replacementCount: Number,
            cancelCount: Number
        }]
    }
});

// Create the model
const SellerData= mongoose.model('SellerData', sellerSchema);

module.exports = SellerData;
