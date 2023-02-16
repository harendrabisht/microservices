const mongoose = require('mongoose');
const PersonalInfo = require('../model/personal-info');
const Api404Error = require('../error-controller/404-error');
const { logError } = require('../error-controller/error-handler');

const getUserById = async (userId) => {
    try {
        if (!userId) {
            throw { statusCode: 400, message: 'User Id is not defined' };
        }

        const userInfo = await PersonalInfo
            .findOne({ userId })
            .populate('shippingAddress')
            .populate('billingAddress')
            .exec();

        if (!userInfo) {
            throw new Api404Error('user does not exists');
        }
        return userInfo;
    } catch (error) {
        logError(error);
    }
};

module.exports = {
    getUserById,
};

