#!/usr/bin/node
const util = require('util');
const request = util.promisify(require('request'));
const filmID = process.argv[2];

async function starwarsCharacters(filmId) {
  const endpoint = 'https://swapi-api.hbtn.io/api/films/' + filmId;

  // Send a request to the API endpoint and await the response
  let response = await (await request(endpoint)).body;

  // Parse the response as JSON
  response = JSON.parse(response);

  const characters = response.characters;

  for (let i = 0; i < characters.length; i++) {
    const urlCharacter = characters[i];

    // Send a request to the character URL and await the response
    let character = await (await request(urlCharacter)).body;

    // Parse the response as JSON
    character = JSON.parse(character);

    console.log(character.name);
  }
}

starwarsCharacters(filmID);
