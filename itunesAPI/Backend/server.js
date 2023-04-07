// Import the Express framework and create an instance of it
const express = require("express");
const app = express();

// Set the port to listen on
const port = 8081;

// Import and use the body-parser middleware to parse incoming request bodies
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Import and use the CORS middleware to allow cross-origin requests
const cors = require("cors");
app.use(cors());

// Import the axios module to make HTTP requests from the server
const axios = require('axios')

// Import the helmet module to set various security-related HTTP headers
const helmet = require("helmet");
app.use(helmet());

// Define a route to search for a term in the iTunes API
app.get("/api/search/:entity/:term", async (req, res) => {
  // Extract the entity and term parameters from the request URL
  const entity = req.params.entity;
  const term = req.params.term;

  // Use axios to make a request to the iTunes API with the given entity and term
  const result = await axios(
    `https://itunes.apple.com/search?term=${term}&entity=${entity}&limit=50`
  );
  res.send(result.data);
});

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
