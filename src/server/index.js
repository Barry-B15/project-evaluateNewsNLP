projectData = {};

var path = require('path')

// config env
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is: ${process.env.API_KEY}`);

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// require the aylien npm package
var aylien = require("aylien_textapi");


const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID, // "your-api-id",
    application_key: process.env.API_KEY // "your-key"
});

console.log(`Your API key is ${process.env.API_KEY}`);

//Endpoint: https: //api.aylien.com/api/v1

//test the api
// sentiment endpoint
textapi.sentiment({
    'text': 'John is a very good football player!',
    'mode': 'tweet'
}, function(error, response) {
    if (error === null) {
        console.log(response);
    }
});

//classify endpoint
textapi.classify({
    //'text': 'John is a very good football player!'
    'url': "http: //techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile ",
    //add a url to test
}, function(error, response) {
    if (error === null) {
        response['categories'].forEach(function(c) {
            console.log(c);
        });
    }
});


app.get('/textapi', function(req, res) {
    console.log('GET', projectData['nlpURL']) // nlpURL??
})

app.post('/addNLP', addNLP);

function addNLP(req, res) {
    textapi.sentiment({
        url: req.body.url, //projectData['nlpURL'],
        mode: 'document'
    }, function(error, response) {
        res.send(response)
        console.log({ 'POST Response': response })
    })
}

/* app.post('/newsArticle', function(req, res) {
    console.log('POST');
    console.log(req.body)
    textapi.sentiment({
        url: req.body.text,
        mode: 'document'
    }, function(error, response) {
        //console.log('inside post function');
        console.log(response);
        res.send(response)
        if (error === null) {
            //console.log('inside error');
            console.log(response);
        }
    })
});
 */
//module.exports = app;