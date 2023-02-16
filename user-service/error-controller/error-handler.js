const logger = require('./logger');
const BaseError = require('./base-error');

const logError = (error) => {
    logger.error(error);
}

const logErrorMiddleware = (error, req, res, next) => {
    logError(error);
    next(error);
}

const returnError = (error, req, res, next) => {
    res.status(error.statusCode).send(err.message);
}

const isOperationalError = (error) => {
    if (error instanceof BaseError) {
        return error.isOperational
    }
    return false
}

module.exports = {
    logError,
    logErrorMiddleware,
    isOperationalError,
    returnError,
};
