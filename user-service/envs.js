const { config } = require('dotenv');

config();

module.exports = {
    port: process.env.PORT || 4001,
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/users'
}