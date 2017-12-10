const functions = require("firebase-functions");
const express = require("express");

/* Express */
const app = express();
app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/" } );
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};