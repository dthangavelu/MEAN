
var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.send("<h1>Hello Express</h1>");
   response.render('index');
})

app.post('/result', function(request, response) {  	
   name = request.body.name
   loc = request.body.loc
   lang = request.body.lang
   comment = request.body.comment
   response.render('result.ejs', {name: name, loc: loc, lang: lang, comment: comment,});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})