var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var words = require('./server/words');
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  console.log('Now serving index.html')
  res.sendFile(__dirname + 'index.html');
});

app.get('/words', (req, res) => {
  console.log('Get request to /words')
  res.send(words.words);
});

app.post('/addWord', (req, res) => {
  console.log('Post request to /addWord')
  console.log(req.body);
  words.addWord(req.body)
  .then((data) => res.send(data));
})

app.get('/*', (req, res) => {
  console.log('Unknown route');
  res.send('404');
})

app.listen(port);
console.log("Server listening on port " + port);
