#!/usr/bin/node

// Import the 'util' module from Node.js
const util = require('util');
// Use 'util.promisify' to convert the 'request' function into a promise-based function

const request = util.promisify(require('request'));
// Get the movie ID from the command-line arguments

const filmID = process.argv[2];

// Define an asynchronous function to retrieve and print the characters of a Star Wars movie
async function starwarsCharacters (filmId) {
  // Construct the API endpoint URL using the provided movie ID
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
