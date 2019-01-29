var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Set up default mongoose connection . the db is "hosted" in mongodb compass which is an atlas desktop client
var mongoDB = 'mongodb://localhost:27017/oldnorse';
mongoose.connect(mongoDB, { useNewUrlParser: true },);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
  //the next line specifies where the view is located
app.set('views', path.join(__dirname, 'views'));
  //this specifies which view engine/template library is used
app.set('view engine', 'pug');

//In addition to the 3rd party libraries
// we imported previously, we use the express.static middleware
// to get Express to serve all the static files in the /public directory in the project root.
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); //TODO this needs to be decided in the end if needed or not
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//The Express application object (app) is now fully configured.
// The last step is to add it to the module exports (this is what allows it to be imported by /bin/www).
module.exports = app;
