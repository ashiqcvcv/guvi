express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
//extended true means only array or string else all type of data

app.post('/users', function(req, res) {
    console.log(req.body); //requset for server
    res.json({
            message: "request received"
        }) //response for browser
})

//calling the same PUT request multiple times will produce same result
//calling a POST request multiple times creat the same resource multiple times.
app.put('/users/:id', function(req, res) {
    //: will read whole the files in users. so /users should
    //id as the parameter to use for modify the existing one (id act as variable)
    console.log(req.params.id);
    res.json({
        message: "request received"
    })
})

app.listen(3000, function() {
    console.log("port is running in 3000");
})