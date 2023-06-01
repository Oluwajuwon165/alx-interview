#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const characters = JSON.parse(body).characters;
    characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error(charError);
        } else {
          const characterName = JSON.parse(charBody).name;
          console.log(characterName);
        }
      });
    });
  }
});
