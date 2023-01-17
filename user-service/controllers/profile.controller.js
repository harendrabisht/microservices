const mongoose = require('mongoose');
const PersonalInfo = require('../model/personal-info')

const getUserById = async(userId) => {
    try {
        if(!userId) {
            throw { statusCode: 400, message: 'User Id is not defined' };
        }
        
        const userInfo = await PersonalInfo
            .findOne({ userId })
            .populate('shippingAddress')
            .populate('billingAddress')
            .exec();
        
        if(!userInfo) {
            throw { statusCode: 404, message: 'user does not exists'};
        }
        return userInfo;
    } catch (error) {
        return Promise.reject(error);
    }
};

module.exports = {
    getUserById,
};

