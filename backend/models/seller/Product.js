const mongoose = require('mongoose');

// Define the schema for the product model
const productSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SellerInfo', // seller ki id aayegi seller k db se 
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String
    }
});

// Create the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
