const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    cartId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['OPEN', 'SUBMITTED'],
        default: 'OPEN'
    },
    userId: {
        type: String,
    },
    isAnonymous: {
      type: Boolean,
      default: true,  
    },
    entries: [{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        price: {
            type: Number,
            required: true
        },
        addOns: {

        },

    }],
    payment: {
        status: {
            type: Boolean,
            default: false,
        },
        transactionId: {
            type: String,
            default: null,
        },
    },
    voucher: [{
        code: {
            type: String,
        },
        discount: {
            type:  Number,
        },
        message: {
            type: String,
        }
    }],
    total: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Cart', cartSchema);
