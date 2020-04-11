const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
var cors = require('cors');
const MongoClient = require('mongodb');

const app = express();
const url = 'mongodb://localhost:27017';
const saltRounds = 10;
app.use(cors());
app.use(bodyparser.json());

//program to sign up
app.post('/users', function(req, res) {
    console.log(req.body);

    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        var db = client.db("users");
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) throw err;
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;

                db.collection('log').insertOne({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    mob: req.body.mob
                }, (err, result) => {
                    if (err) throw err;
                    client.close();

                    res.json({
                        message: "success"
                    })
                })
            })
        })
    })
})

//program to login
app.post("/login", function(req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        var db = client.db("users");
        db.collection('log').findOne({ email: req.body.email }, (err, user) => {
            if (err) throw err;
            console.log(user);
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) throw err;
                if (result) {
                    res.json({
                        message: "success"
                    })
                    client.close();
                }
            })
        })
    })
});


app.listen(3000, function() {
    console.log("port is running")
});