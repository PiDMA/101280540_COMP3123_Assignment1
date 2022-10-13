const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    _id: {mongoose.Schema.Types.ObjectId,  autoGenerate: true},
    firstName: { type: String, required: true , match: /^[a-zA-Z0-9]+$/, maxlength: 100, minlength: 1},
    lastName: { type: String, required: true , match: /^[a-zA-Z0-9]+$/, maxlength: 100},
        email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    gender: String,
    salary: Number
});



const Employees = new mongoose.model('Employees', employeeSchema);
module.exports = Employees;