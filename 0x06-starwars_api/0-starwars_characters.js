#!/usr/bin/node

// Import the 'util' module from Node.js
const util = require('util');
// Use 'util.promisify' to convert the 'request' function into a promise-based function

const request = util.promisify(require('request'));
// Get the movie ID from the command-line arguments

const filmID = process.argv[2];

// Define an asynchronous function to retrieve and print the characters of a Star Wars movie
async function starwarsCharacters (filmId) {
  const endpoint = 'https://swapi-api.hbtn.io/api/films/' + filmId;
  let response = await (await request(endpoint)).body;
  response = JSON.parse(response);
  const characters = response.characters;

  for (let i = 0; i < characters.length; i++) {
    const urlCharacter = characters[i];
    let character = await (await request(urlCharacter)).body;
    character = JSON.parse(character);
    console.log(character.name);
  }
}

starwarsCharacters(filmID);
