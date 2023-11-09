// Create web server
// 1. npm init
// 2. npm install express --save
// 3. node comments.js

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var cookieParser = require('cookie-parser');

var fs = require("fs");

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var comments = [{
    "id": 1,
    "author": "Pete Hunt",
    "text": "This is one comment"
}, {
    "id": 2,
    "author": "Jordan Walke",
    "text": "This is *another* comment"
}];

app.get('/comments', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(comments));
});

app.post('/comments', function (req, res) {
    var newComment = {
        id: Date.now(),
