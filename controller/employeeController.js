const express = require('express');
let router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

let {Employee} = require('../model/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            return res.send(docs);
        } else {
            return res.status(400).send(`Error in getting the employee with id ${id}, with error: ${JSON.stringify(err)}`);
        }
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send(`No record found with given id:  ${id}`);
    }
    Employee.findById(id, (err, doc) => {
        if (!err) {
            return res.status(200).send(doc)
        } else {
            return res.status(400).send(`Error in getting the employee with id ${id}`);
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
            return res.send(docs);
        } else {
            console.log('Error on saving employee', JSON.stringify(err));
        }
    })
});

router.put('/', (req, res) => {
    const id = req.body._id;
    if (!id || !ObjectId.isValid(id)) {
        return res.status(400).send(`No record found with given id:  ${id}`);
    }
    let emp = new Employee(req.body);

    Employee.findByIdAndUpdate(id, emp, {new: true}, (err, docs) => {
        if (!err) {
            return res.send(docs);
        } else {
            return res.status(400).send(`Error on updating the employee with id ${id}`);
        }
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send(`No record found with given id:  ${id}`);
    }
    Employee.findByIdAndRemove(id, (err, doc) => {
        if (!err) {
            return res.status(200).send(doc)
        } else {
            return res.status(400).send(`Error in deleting the employee with id ${id}`);
        }
    })
});

module.exports = router;