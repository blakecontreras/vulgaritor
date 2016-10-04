var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));



app.listen(port);
console.log("Server listening on port " + port);
