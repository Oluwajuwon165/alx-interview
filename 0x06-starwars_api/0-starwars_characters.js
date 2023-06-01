#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as a command-line argument.');
  process.exit(1);
}

const url = `https://swapi.dev/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Invalid response:', response.statusCode);
  } else {
    const film = JSON.parse(body);
    const characters = film.characters;

    characters.forEach((characterUrl) => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error('Error:', error);
        } else if (response.statusCode !== 200) {
          console.error('Invalid response:', response.statusCode);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});
