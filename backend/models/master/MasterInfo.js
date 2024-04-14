const mongoose = require('mongoose');

// Define the schema
const masterInfoSchema = new mongoose.Schema({
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
        // minlength: 4, // Minimum length of 4 characters
        // maxlength: 20, // Maximum length of 20 characters
        // match: /^[a-zA-Z0-9_]+$/, // Only alphanumeric characters and underscores allowed
        trim: true // Trim whitespace from the beginning and end
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // Email validation regex
    },
    password: {
        type: String,
        required: true,
        // minlength: 6 // Minimum password length of 6 characters
    },
    profileImage: {
        type: String // Assuming you'll store the URL of the profile image
    }
});

// Create the model
const MasterInfo = mongoose.model('MasterInfo', masterInfoSchema);

module.exports = MasterInfo;
