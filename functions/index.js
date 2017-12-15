var path = require('path');
const express = require("express");
const cors = require("cors");

/* Firebase */
// Import Admin SDK
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

/* Express */
const app = express();
app.use(cors());

app.get('/', function(req, res){
    db.collection("portfolio").where("tags.content", "==", true).get()
    .then((snapshot) => {
        const response = [];
        snapshot.forEach(doc => {
            response.push(doc.data());
        });
        res.json(response);
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
});

app.get('/document/:id', function(req, res){
    db.collection("portfolio").doc(req.params.id).get()
    .then((snapshot) => {
        res.json(snapshot.data());
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
});

app.get('/criteria/:criteria', function(req, res){
    db.collection("portfolio")
    .where(req.params.criteria.toLowerCase(), "==", true).get()
    .then((snapshot) => {
        const response = {
            info: null,
            data: []
        };
        snapshot.forEach(doc => {
            if(doc.data().title == req.params.criteria){
                response.info = doc.data();
            }else {
                response.data.push(doc.data().title);
            }
        });
        res.json(response);
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};
