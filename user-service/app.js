var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const httpLogger = require('./error-controller/http-logger');
const { logError, returnError } = require('./error-controller/error-handler')
const mongoose = require('mongoose');
const { dbUrl } = require('./envs');


var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile.router');
const healthRouter = require('./routes/health.router');

var app = express();

app.use(logger('dev'));
app.use(httpLogger);
// app.use(logError);
// app.use(returnError);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/health', healthRouter);

// Connect to mongoDB

mongoose.connect(dbUrl, {
	useNewUrlParser: true
});
mongoose.Promise = global.Promise;

mongoose.connection.on('error', console.error.bind(console, '❌❌❌ MongoDB Connection Error ❌❌❌'));
module.exports = app;
