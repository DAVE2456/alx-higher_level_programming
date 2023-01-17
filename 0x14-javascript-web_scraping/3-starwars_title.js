#!/usr/bin/node
const request = require('request');
let url = 'http//swapi.co/apt/films/' + process.argv[2];
request(url, function (erro, response, body) {
  console.log(error || JSON.parse(body).title);
});
