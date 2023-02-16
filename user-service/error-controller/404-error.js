const httpStatusCodes = require('./http-status-code');
const BaseError = require('./base-error');

class Api404Error extends BaseError {
    constructor(name, statusCode = httpStatusCodes.NOT_FOUND, isOperational = true, description = 'Not Found') {
        super(name, statusCode, isOperational, description);
    }
}

module.exports = Api404Error;
