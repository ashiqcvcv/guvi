express = require('express');
const app = express();

var myData = ["Yep I am a data from server"];

app.get('/database', function(req, res) {
    res.json({
            myData
        }) //response for browser
})


console.log(myData);



app.listen(3000, function() {
    console.log("port is running in 3000");
})