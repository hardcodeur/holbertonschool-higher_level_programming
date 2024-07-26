#!/usr/bin/node
const request = require('request'),movieId = process.argv[2];
request
  .get("https://swapi-api.hbtn.io/api/films/"+movieId)
  .on('response', function(response) {
    console.log("code: "+response.title)
  })
