const mongoose = require('mongoose');

// Define the schema for the product model
const allproductSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SellerInfo', // seller ki id aayegi seller k db se 
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    category: [{
        type: String,
        required: true
    }],
    brand: [{
        type: String
    }],
    items:[{
        reviews:[{
            feedback: {
                type: String,
                required: true
            },
            image: {
                type: [String],
            },
            isLike: {
                type: Boolean,
                required: true
            },
            dislikeReason: {
                type: String
            },
            rating: {
                type: Number,
                required: true,
                min: 1,
                max: 5
            },
            timestamp: {
                type: Date,
                default: Date.now
            },
        }],
        
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
    }]
});

// Create the model
const AllDetails= mongoose.model('AllDetails', allproductSchema);

module.exports = AllDetails;
