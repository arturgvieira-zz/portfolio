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

app.get('/data/:parent/:child', function(req, res){
    const struct = req.params.parent != 'portfolio' ? 'portfolio/data/' + req.params.parent : req.params.parent;
    // Get a database reference
    var db = admin.database();
    var ref = db.ref(struct + "/data/" + req.params.child);
    ref.once("value", function(data) {
      res.json(data);
    });
});

app.get('/resources', function(req, res){
    // Get a database reference
    var db = admin.database();
    var ref = db.ref("portfolio/resources");
    ref.orderByKey().once("value", function(data) {
      res.json(data);
    });
});

app.get('/resources/:id', function(req, res){
    // Get a database reference
    var db = admin.database();
    var ref = db.ref("portfolio/resources/" + req.params.id);
    ref.once("value", function(data) {
      res.json(data);
    });
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};
