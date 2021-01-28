const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const adresRoute = require('./routes/adres');

app.use(bodyParser.json());

app.use("/adres", adresRoute);

module.exports = app;