const mongoose = require('mongoose');

const finalordersummary = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // seller ki id aayegi seller k db se 
        required: true
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderSummaryDetails', // seller ki id aayegi seller k db se 
        required: true
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaymentInfo', // seller ki id aayegi seller k db se 
        required: true
    },
    
    searchId: {
        type: {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                itemId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Item',
                    reviewId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Review'
                    }
                },
            },
        },
        required: true
    }
});

// Create the model
const FinalOrderSummaryDetails= mongoose.model('FinalOrderSummaryDetails', finalordersummary);

module.exports = FinalOrderSummaryDetails;
