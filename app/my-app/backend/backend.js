var express = require('express');
var app = express();
app.get('/cities', function (req, res) {
    var json = {
        "cities":
            [
                "Ahmedabad", "Goa", "Lucknow", "Allahabad", "Bangalore", "Bhopal", "Bhubaneswar", "Bilaspur", "Ranchi", "Chennai", "Hyderabad", "Mumbai", "Kochi", "Aurangabad", "Indore", "Nasik", "New Delhi"
            ]
    };
    res.setHeader('Access-Control-Allow-Origin','*');
    // res.send(JSON.stringify(json));
    res.json(json);

});

app.get('/airports', function (req, res) {
    res.send("hii");
});

app.listen(8000);