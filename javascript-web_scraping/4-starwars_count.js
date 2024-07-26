#!/usr/bin/node
const request = require('request'),url = process.argv[2],id = process.argv[3];
request(url, { json: true },function (error, response, body) {
  const movies = body.results;
  const characterId=id;
  let cpt = 0;
  movies.forEach(movie => {
    const characters = movie.characters;
    const  charactersUrl = `https://swapi-api.hbtn.io/api/people/${characterId}/`;
    if(characters.includes(charactersUrl)){
      cpt++;
    }
  });
  console.log(cpt)
});