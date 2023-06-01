#!/usr/bin/node

const util = require('util');
const request = util.promisify(require('request'));
const filmID = process.argv[2];

// Retrieve and print the characters of a Star Wars movie
async function starwarsCharacters(filmId) {
  const endpoint = 'https://swapi-api.hbtn.io/api/films/' + filmId;

  // Send a request to the API endpoint and await the response
  let response = await (await request(endpoint)).body;

  // Parse the response as JSON
  response = JSON.parse(response);

  // Get the array of characters from the response
  const characters = response.characters;

  // Iterate over each character URL in the array
  for (let i = 0; i < characters.length; i++) {
    const urlCharacter = characters[i];

    // Send a request to the character URL and await the response
    let character = await (await request(urlCharacter)).body;

    // Parse the response as JSON
    character = JSON.parse(character);

    // Print the name of the character
    console.log(character.name);
  }
}

// Call the 'starwarsCharacters' function with the provided movie ID
starwarsCharacters(filmID);
