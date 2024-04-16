const mongoose = require('mongoose');

// Define the schema for the product model
const productSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SellerInfo', // seller ki id aayegi seller k db se 
        // required: true
    },
    // subcategories: [{
    //         categoryName: {
    //             type: String,
    //             required: true
    //         },
    //         products: [{
    //             productName: {
    //                 type: String,
    //                 required: true
    //             },
    //             category: [{
    //                 type: String,
    //                 required: true
    //             }],
    //             brand: [{
    //                 type: String
    //             }],
    //             items: [{
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'item', // seller ki id aayegi seller k db se 
    //             // required: true
    //             }]
    //         }]
    //     }],
    productName: {
        type: String,
        required: true
    },
    category: [{
        type: String,
        required: true
    }],
    brand: [{
        type: String,
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


});

// Create the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
