const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalnfoSchema = new Schema({
    userId: {
        type: String
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String
    },
    email: {
        type: String,
    },
    shippingAddress: [{
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }],
    billingAddress: [{
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }]
});

module.exports = mongoose.models.PersonalInfo || mongoose.model('PersonalInfo', PersonalnfoSchema);


