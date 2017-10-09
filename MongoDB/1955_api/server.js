
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
// Require path
var path = require('path');

var session = require('express-session');
app.use(session({secret: 'supersecret'}));

require("./server/config/mongoose.js");

var routes_setter = require("./server/config/routes.js");

routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})