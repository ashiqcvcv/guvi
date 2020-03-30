express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));

var myData = [{
    id: "123",
    name: "ashiq",
    address: {
        state: "kerala",
        country: "india",
        continent: "asia"
    }
}, {
    id: "456",
    name: "ashwin",
    address: {
        state: "sahara",
        country: "uganda",
        continent: "africa"
    }
}];

app.get('/delete', function(req, res) {
    var id = req.param('id');
    for (var i = 0; i < myData.length; i++) {
        if (myData[i].id == id) {
            myData.splice(i, 1);
        }
    }
    console.log(myData);
    res.json({
        message: "delete request recieved"
    })
})


app.listen(3000, function() {
    console.log("port is running in 3000");
})