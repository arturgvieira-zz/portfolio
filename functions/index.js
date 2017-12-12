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
    
    
    // Get a database reference to our posts
    var db = admin.database();
    var ref = db.ref("welcome");
    ref.once("value", function(data) {
      res.json({ message: data});
    });
});

app.get('/projects', function(req, res){
    res.json({ message: 'Hello, this is the Projects Endpoint.'});
});

app.get('/frameworks', function(req, res){
    res.json({ message: 'Hello, this is the Frameworks Endpoint.'});
});

app.get('/languages', function(req, res){
    res.json({ message: 'Hello, this is the Languages Endpoint.'});
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};
