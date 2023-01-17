const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalnfoSchema = new Schema({
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
    addresses: [{
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }]
});

module.exports = mongoose.model('PersonalInfo', PersonalnfoSchema);


