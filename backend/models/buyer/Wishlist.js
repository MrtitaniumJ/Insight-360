const mongoose = require('mongoose');



// Define the schema for the search schema
const searchSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // seller ki id aayegi seller k db se 
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

const Wishlist = mongoose.model('Wishlist', searchSchema);
module.exports = Wishlist;

