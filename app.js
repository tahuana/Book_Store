"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";

const express     = require('express');
const bodyParser  = require("body-parser");

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

const app         = express();


app.get('/', (req, res) => {
  res.send('This will be the home page');
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});



/*
Routes:

/register
/login
/logout

/users/:id

/categories
/categories/:id

/books
/books/:id
*/