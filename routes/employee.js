const express = require('express');
const EmployeeModel = require('../models/employee');
const UsersModel = require('../models/user');
const router = express.Router();

router.post("/employees", async (req, res) => {
    const employee = new EmployeeModel(req.body)
    try{
        await employee.save();
        res.status(201).send(employee);
    } catch(error){
        res.status(400).send(error + "\n" + {message: "Could not create employee"});
    }
});

router.post("/employees", async (req, res) => {
    const employee = new EmployeeModel(req.body)
    try{
        await user.save();
        res.status(201).send(user);
    }catch(error){
        res.status(400).send(error);
    }
});

router.get("/employees", async (req, res) => {
    try{
        const employees = await EmployeeModel.find({});
        res.status(200).send(employees);
    }
    catch(error){
        res.status(400).send(error + "\n" + {message: "No Employees found"});
    }
});

router.get("/employees/:id", async (req, res) => {
    try{
        const employee = await EmployeeModel.findById(req.params.id);
        res.status(200).send(employee);
    }
    catch(error){
        res.status(400).send(error + "\n" + {message: "No Employee found"});
    }
});

router.put("/employees/:id", async (req, res) => {
    try{
        const employee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(employee);
    }
    catch(error){
        res.status(400).send(error + "\n" + {message: "Could not update employee"});
    }
});

///api/emp/employees?eid=xxx
router.delete("/employees/:id", async (req, res) => {
    try{
        const employee = await EmployeeModel.findByIdAndDelete(req.params.id);
        res.status(204).send({message: "Employee successfully deleted"});
    }
    catch(error){
        res.status(400).send(error + "\n" + {message: "Could not delete employee"});
    }
});


module.exports = router;