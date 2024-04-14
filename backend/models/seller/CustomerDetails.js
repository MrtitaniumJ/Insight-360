const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // seller ki id aayegi seller k db se 
        required: true
    },
    purchasedId: {
        type: {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            }
        },
        required: true
    }
});

const CustomerDetails= mongoose.model('CustomerDetails', customerSchema);
module.exports = CustomerDetails;

