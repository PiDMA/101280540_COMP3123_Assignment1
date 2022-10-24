const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true },  
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    username: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9]+$/
    },
    password: { type: String, required: true }
});

const userModel = new mongoose.model('User', UserSchema);
module.exports = userModel;

