const express = require("express");

const PORT = 3001;
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
const request = require('request');

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/express/list/cards/all", (req, res) => {
    let authHeader = req.headers.authorization
    var options = {
        uri: 'http://ciphertrust:9005/api/cards/list',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader
        }
    }
    
    request(options, function (error, response) {
        console.log(error)
        res.set('Content-Type', 'application/json');
        res.send(response.body)
    });
});

app.post("/express/add/card", (req, res) => {
    let authHeader = req.headers.authorization
    var options = {
        uri: 'http://ciphertrust:9005/api/cards/save',
        body: JSON.stringify(req.body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader
        }
    }
    
    request(options, function (error, response) {
        console.log(error)
        res.json({response: response.body})
    });    
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});