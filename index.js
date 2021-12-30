const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var { environment } = require('./environment');


app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/src'));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/src/roulette.html'));
});


app.listen(environment.port, () => {
  console.log("Server started on port " + environment.port + ". Visit http://localhost:" + environment.port);
});
