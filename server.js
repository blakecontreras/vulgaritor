var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var words = require('./server/words');
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.get('/words', (req, res) => {
  res.send(words.words);
});

app.post('/addWord', (req, res) => {
  words.addWord(req.body)
  .then((data) => res.send(data));
})

app.listen(port);
console.log("Server listening on port " + port);
