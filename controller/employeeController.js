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

router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    emp.save((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error on saving employee', JSON.stringify(err));
        }
    })
});

module.exports = router;