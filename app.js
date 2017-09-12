"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('This will be the home page')
})

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
