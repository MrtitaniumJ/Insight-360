const mongoose = require('mongoose');

// Define the schema
const userInfoSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4, // Minimum length of 4 characters
        maxlength: 20, // Maximum length of 20 characters
        match: /^[a-zA-Z0-9_]+$/, // Only alphanumeric characters and underscores allowed
        trim: true // Trim whitespace from the beginning and end
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // Email validation regex
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum password length of 6 characters
    },
    profileImage: {
        type: String // Assuming you'll store the URL of the profile image
    },
    phoneNumber: {
        type: String,
        match: [/^\d{10}$/, 'Please fill a valid phone number'] // Match 10-digit phone number format
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
    // searchId: [{
    //     type: {
    //         productId: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'Product',
    //             itemId: {
    //                 type: mongoose.Schema.Types.ObjectId,
    //                 ref: 'Item',
    //                 reviewId: {
    //                     type: mongoose.Schema.Types.ObjectId,
    //                     ref: 'Review'
    //                 }
    //             },
    //         },
    //     },
    //     required: true
    // }]
});

// Create the model
const MasterInfo = mongoose.model('User', userInfoSchema);

module.exports = MasterInfo;
