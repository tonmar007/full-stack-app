const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    pass: {
        type: String,
        required: true,
        trim: true
    }
});

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;