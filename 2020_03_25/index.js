const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors')
const app = express();
const MongoClient = require('mongodb');
const url = 'mongodb://localhost:27017';

app.use(cors());
app.use(bodyparser.json());

//to create data
app.post('/users', function(req, res) {
    console.log(req.body);
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        var db = client.db("usersDB");
        db.collection('users').insertOne(req.body, (err, result) => {
            if (err) throw err;
            client.close();

            res.send(result)
        })
    })
})

//to read data
app.post('/users/read', function(req, res) {
    console.log(req.body);
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        var db = client.db("usersDB");
        db.collection('users').findOne({ name: req.body.name }, (err, result) => {
            if (err) throw err;
            client.close();
            res.json(result);
            console.log(result);
        })
    })
})

//to update data
app.put('/users/update', function(req, res) {
    //id as the parameter to use for modify the existing one (id act as variable)
    console.log(req.body);
    MongoClient.connect(url, (err, client) => {
        //////////////
        if (err) return console.log(err);
        var updateObj = {}
        updateObj[req.body.update] = req.body.replace;

        var db = client.db("usersDB");
        db.collection('users').findOneAndUpdate({ name: req.body.name }, {
            $set: updateObj
        }, (err, result) => {
            if (err) throw err;
            client.close();

            res.send(result)
        })
    })
})


//to delete data
app.delete('/users', function(req, res) {
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);

        var db = client.db("usersDB");
        db.collection('users').findOneAndDelete({ name: req.body.name }, (err, result) => {
            if (err) throw err;
            client.close();

            res.send(result)
        })
    })
})


app.listen(3000, function() {
    console.log("port 3000 is running");
})