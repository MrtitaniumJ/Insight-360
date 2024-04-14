const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // seller ki id aayegi seller k db se 
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    isdelevired:{
        type:Boolean,
        required:true,
    },
    isreturn:{
        type:Boolean,
        required:true,
    },
    iscancel:{
        type:Boolean,
        required:true,
    },
    isreplacement:{
        type:Boolean,
        required:true,
    },
});

const Wishlist= mongoose.model('Wishlist', searchSchema);
module.exports = Wishlist;

