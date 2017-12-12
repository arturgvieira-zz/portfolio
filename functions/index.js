const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

/* Firebase */
// Import Admin SDK
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-arturgvieira.firebaseio.com/"
});

/* Express */
const app = express();
app.use(cors());

app.get('/', function(req, res){
    // Get a database reference
    var db = admin.database();
    var ref = db.ref("portfolio");
    ref.once("value", function(data) {
      res.json(data);
    });
});

app.get('/data/:param', function(req, res){
    // Get a database reference
    var db = admin.database();
    var ref = db.ref("portfolio/data/" + req.params.param);
    ref.once("value", function(data) {
      res.json(data);
    });
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};
