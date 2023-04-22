const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // API endpoint for breed search
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Make a request to the API endpoint
  request(url, (error, response, body) => {
    if (error) {
      // console.error('Error occured', error);
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      // console.log(data);
      // console.log(typeof data);

      //Check if breed is found
      if (data.length === 0) {
        // console.log(`Breed '${breedName}' not found`);
        callback(`Breed '${breedName}' not found`, null);
        // return;
      } else {

        // Print the breed description
        // const breed = data[0];
        const description = data[0].description;
        // console.log(breed.description);
        callback(null, description);
      }
    }
  });
};


// fetchBreedDescription(breedName, callback);

module.exports = { fetchBreedDescription };