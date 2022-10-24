const express = require('express');
const mongoose = require('mongoose')
const app = express();
const SERVER_PORT = 3002;
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');

app.use(express.json());
app.use(express.urlencoded());
mongoose.connect('mongodb+srv://david:1234@cluster0.plxa2pp.mongodb.net/?retryWrites=true&w=majority')


//Routes which will be used 
app.use("/api/emp", employeeRoutes)
app.use("/api/user", userRoutes)


app.route("/")
    .get((req, res) => {
        res.send("<h1>David Pinto <br> 101280540 <br> Assignment 1</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})