const express = require('express');
const EmployeeModel = require('../models/employees');
const UsersModel = require('../models/users');
const routes = express.Router();

routes.get('/employees', async (req, res) => {
    EmployeeModel.find()
        try {
            const employees = await EmployeeModel.find();
            res.status(201).send(employees);
        } catch (err) {
            res.status(500).send(err);
        }
}
