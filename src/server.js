// init project
const express = require("express");
const bodyParser = require("body-parser");
const { cors } = require('./config/cors');

// initializations
const app = express();
require('./config/database');

// Handle CORS + middleware
app.use(cors);
app.use(bodyParser.json())

// Routes
app.use(require('./routes/transaction'));

// Static files
app.use(express.static("public"));

// Server is listening
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});