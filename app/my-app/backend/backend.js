var express = require('express');
var app = express();
var fs = require("fs");
var mongoClient = require('mongodb').MongoClient;
var db;



var url = 'mongodb://localhost:27017/airports&cities'
mongoClient.connect(url, function (err, client) {
    if (err) throw err;

    db = client.db('airports&cities');
    fs.readFile('./my-app/backend/data.json',
        function (err, data) {
            if (err) throw err;
          //  console.log(data);
            //res.send(data.toString('utf-8'));
            var obj = JSON.parse(data);
            // res.send(obj.airports.filter((item)=>item.city_name == 'Hyderabad'));
            var cities = obj.airports.map((item) => {
                var cityObj = {};
                cityObj.city_name = item.city_name;
                return cityObj;

            });

            db.collection('cities').find({}).toArray(function (err, result) {
                if (err) {
                    throw err;
                } if (!result||result.length==0) {
                    db.collection("cities").insertMany(cities, function (err, res) {
                        if (err) throw err;
                        console.log(res.insertedCount + " cities documents inserted");
                        // close the connection to db when you are done with it
                    });
                }
                console.log(result);
            });


            db.collection('airports').find({}).toArray(function (err, result) {
                if (err) {
                    throw err;
                } if (!result||result.length==0)  {
                    db.collection("airports").insertMany(obj.airports, function (err, res) {
                        if (err) throw err;
                        console.log(res.insertedCount + " airports documents inserted");
                    });
                }
                console.log(result);
            });
        });

});
app.get('/cities', function (req, res) {
    db.collection('cities').find({}, { projection: { "_id": 0 } }).toArray(function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.send(JSON.stringify(json));
        res.json(result);
    });



});

app.get('/airports', function (req, res) {

    db.collection('airports').find({ "city_name": req.query.city }, { projection: { "_id": 0 } }).toArray(function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
            res.setHeader('Access-Control-Allow-Origin', '*');
        // res.send(JSON.stringify(json));
        res.json(result);
    });


});

app.listen(8000);