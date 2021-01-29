const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

// API query GET route for gif search
router.get(`/:q`, (req, res) => {
  let query = req.params.q;
  console.log(query);
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=25`
    ) // limits returned gifs to 25
    .then((response) => {
      res.send(response.data.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
