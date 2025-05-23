const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const api = require('./src/routes/api');

const app = express();

app.use(session({ 
    secret: 'bookreactionsexpress', 
    saveUninitialized: true,
    resave: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.disable('etag'); 

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");	
    next();
})

process.on('uncaughtException', function (err) {
    if (err) console.log(err, err.stack);
});


// JSON API
var baseUrl = '/api/bookreactions/';

app.get(baseUrl + 'books', api.books);
app.get(baseUrl + 'reviews', api.reviews);

app.post(baseUrl + 'reviews', api.addReview);
app.post(baseUrl + 'books', api.addBook);

app.put(baseUrl + 'reviews', api.updateReview);
app.put(baseUrl + 'books', api.updateBook);

app.delete(baseUrl + 'reviews/:id', api.deleteReview);
app.delete(baseUrl + 'books/:id', api.deleteBook);


// Start
app.listen(3030, function () {
    console.log("Book Reactions Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
