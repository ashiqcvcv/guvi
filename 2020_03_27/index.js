const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
var cors = require('cors')
const mongoClient = require('mongodb');
const jwt = require('jsonwebtoken');
const config = require("./config");

const app = express();
const url = 'mongodb://localhost:27017';
const saltRounds = 10;

app.use(cors());
app.use(bodyparser.json());

//login
app.post('/login', function(req, res) {
    var password = req.body.password;
    var userName = req.body.email;
    //"$2b$10$MbfpKxJov0M9t0jTWKo4PO5BM0Vjk9j90AzfLrG/DubiZkQkypTe6" password:ashiq
    mongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
        if (err) throw err;
        var db = client.db("loginDB");
        db.collection("log").findOne({ email: userName }, function(err, data) {
            if (err) throw err;
            bcrypt.compare(password, data.password, function(err, result) {
                if (err) throw err;
                if (result == true) {
                    var jwtToken = jwt.sign({ id: data.id }, config.secret, {
                            expiresIn: '24h' // expires in 24 hours
                        })
                        //return token to future API call
                    res.json({
                        message: "saved",
                        token: jwtToken,
                        status: 200
                    });
                    console.log("logged in");
                } else {
                    res.json({
                        message: "login error",
                        status: 400
                    });
                }
            })
            client.close();
        })
    })
})


//middle ware used to verify
let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                console.log("token validated");
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: "auth token is not supplied"
        });
    }
}

//token checking
app.post('/dashboard', checkToken, function(req, res) {
    let token = req.headers['x-access-token'];
    res.json({
        message: "success"
    })
})

app.listen(3000, function() {
    console.log("port is running")
})