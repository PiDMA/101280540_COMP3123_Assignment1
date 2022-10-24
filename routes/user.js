const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

router.post("/signup", async (req, res) => {
  const user = new UserModel(req.body)
  try{
    await user.save();
    res.status(201).send(user);
  } catch(error){
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try{
    const user = await UserModel.findByCredentials(req.body);
    res.status(200).send(user);
  } catch(error){
    res.status(400).send(error);
  }
});

module.exports = router;