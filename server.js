// Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = 3000;
const app = express();


// Connect to Database
mongoose.connect('mongodb://localhost/todos').then(
    () => {console.log('MongoDB connected....')},
    err =>  {console.log('Error, Database not connected')}
);

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


// Declare a route
app.get('/', (req, res) => {
    return res.status(200).send({ Hello: 'Welcome to the fast cool Todo API' });
});


app.listen(port);
console.log("Listening on port" + port);

module.exports = app;