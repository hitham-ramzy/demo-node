const express = require('express');
const bodyParser = require('body-parser');
const employeeController = require('./controller/employeeController');

const {mongoose} = require('./db.js');

var app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('application started at port ', 3000);
});

app.use('/employees', employeeController);