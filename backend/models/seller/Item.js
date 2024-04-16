const mongoose = require('mongoose');

// Define the schema for the item model
const itemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    reviewId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    },
    
    itemName: {
        type: String,
        required: true
    },
    itemDetails: {
        type: String
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    images: {
        type: [String]
    },
    company: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    itemDescription: {
        color: {
            type: String
        },
        size: {
            type: String
        },
        warranty: {
            type: Boolean
        },
        available: {
            type: Boolean
        }
        // Add other properties here
    }
});

// Create the model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
