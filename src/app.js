const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./connections/connection")

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

module.exports = app;
