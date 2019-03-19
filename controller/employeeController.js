const express = require('express');
let router = express.Router();

let {Employee} = require('../model/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error on getting employees', JSON.stringify(err));
        }
    })
});

module.exports = router;