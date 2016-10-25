// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/lydia", function (request, response) {
  response.sendFile(__dirname + '/views/lydia.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/info", function (request, response) {
  response.sendFile(__dirname + '/views/info.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/ellie", function (request, response) {
  response.sendFile(__dirname + '/views/ellie.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/daily", function (request, response) {
  response.sendFile(__dirname + '/views/daily.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/belgium", function (request, response) {
  response.sendFile(__dirname + '/views/belgium.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/warmblood", function (request, response) {
  response.sendFile(__dirname + '/views/warmblood.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/fay", function (request, response) {
  response.sendFile(__dirname + '/views/fay.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/swrd", function (request, response) {
  response.sendFile(__dirname + '/views/swrd.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/the-messenger", function (request, response) {
  response.sendFile(__dirname + '/views/the-messenger.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/home-test", function (request, response) {
  response.sendFile(__dirname + '/views/home-test.html');
});


app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
  ];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});