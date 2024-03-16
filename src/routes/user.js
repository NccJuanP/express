const express = require('express');
const userSchema = require("../models/user");

const router = express.Router();

//Create user
router.post('/users', function(req, res) {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message : "error saving user"}));
});

//Get all users
router.get('/users', function(req, res) {
    userSchema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message : "error get all users"}));
});

//Get specific user
router.get('/users/:id', function(req, res) {
    const { id } = req.params;
    userSchema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message : "error user"}));
});

//Update specific user
router.put('/users/:id', function(req, res) {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema.updateOne({ _id : id },{ $set : { name, age, email }})
    .then((data) => res.json(data))
    .catch((err) => res.json({ message : "error update user"}));
});

//Delete specific user
router.delete('/users/:id', function(req, res) {
    const { id } = req.params;
    userSchema.deleteOne({ _id : id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message : "error delete user"}));
});

module.exports = router;