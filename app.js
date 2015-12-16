'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/bower', express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
app.use(function(err, req, res) {
	res.status(err.status || 500);
	res.end('Error ' + err.status||500);
	console.log(path.join(__dirname, 'bower_components'));
});

/*
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});
*/

module.exports = app;
