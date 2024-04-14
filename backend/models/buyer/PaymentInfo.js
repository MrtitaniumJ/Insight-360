const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // seller ki id aayegi seller k db se 
        required: true
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddtoCart', // seller ki id aayegi seller k db se 
        required: true
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderSummaryDetails', // seller ki id aayegi seller k db se 
        required: true
    },
    paymnetStatus:{
        type:Boolean,
        require:true
    },
    transactionId:{
        type:String,
        required:true,
    },
    typeOfPayment:{
        type: String,
        enum: ['DebitCard', 'CreditCard','UPI','COD'],
        required: true
    },
    date:{
        type:timestamp,
        required :true,
    }

});

const PaymentInfo= mongoose.model('PaymentInfo', paymentSchema);
module.exports = PaymentInfo;

