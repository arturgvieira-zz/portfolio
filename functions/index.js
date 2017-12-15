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
    db.collection("portfolio").where("menu", "==", true).get()
    .then((snapshot) => {
        const temp = [];
        snapshot.forEach(doc => {
            temp.push(doc.data().title);
        });
        res.json(temp);
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
        const temp = {
            info: null,
            data: []
        };
        snapshot.forEach(doc => {
            if(doc.data().title == req.params.criteria){
                temp.info = doc.data();
            }else {
                temp.data.push(doc.data().title);
            }
        });
        res.json(temp);
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};
