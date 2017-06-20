const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const router = require('./routes');

//middleware for body parsing and logging
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/puppies', router);


//the * is just a wildcard that matches for any string that doesn't match
app.use('*', (req, res, next) => {
    res.send('Nothing matched');
})

var server = app.listen(3000, () => {
    console.log('Server listening on port', server.address().port);
});
