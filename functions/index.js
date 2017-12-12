const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
/* Express */
const app = express();
app.use(cors());

app.get('/', function(req, res){
    res.json({ message: 'Hello, from NodeJS Express Server Firebase Function.'});
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};