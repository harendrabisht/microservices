const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    addressLine1: {
        type: String,
    },
    addressLine2: {
        type: String,
    },
    landmark: {
        type: String,
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pincode: {
        type: String
    },
    geoLocation: {
        long: Number,
        lat: Number,
    },

});

module.exports = mongoose.model('UserAddress', addressSchema)
