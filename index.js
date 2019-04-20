const express = require('express');
const bodyParser = require('body-parser');
const employeeController = require('./controller/employeeController');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('application started at port ', PORT);
});

app.use('/employees', employeeController);