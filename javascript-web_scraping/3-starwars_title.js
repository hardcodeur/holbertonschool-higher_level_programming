#!/usr/bin/node
const request = require('request'),movieId = process.argv[2];
request("https://swapi-api.hbtn.io/api/films/"+movieId,{ json: true },function (error, response, body) {
  console.log(body.title);
});