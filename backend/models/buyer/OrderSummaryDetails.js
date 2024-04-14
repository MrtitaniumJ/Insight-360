const mongoose = require('mongoose');

// Define the schema for the address schema
const addressSchema = new mongoose.Schema({
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Regular expression to validate pincode format (6 digits)
                return /^[0-9]{6}$/.test(value);
            },
            message: props => `${props.value} is not a valid pincode!`
        }
    },
    landmark: {
        type: String,
        required: true
    }
});

// Define the schema for the user address schema
const userAddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddtoCart', // seller ki id aayegi seller k db se 
        required: true
    },
    address: {
        type: addressSchema,
        required: true
    }
});

// Create the model
const OrderSummaryDetails= mongoose.model('OrderSummaryDetails', userAddressSchema);

module.exports = OrderSummaryDetails;
