const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['genius', 'boss'],
        default: 'genius'
    },
    avatar: {
        type: String
    },
    //个人简介or职位
    description: {
        type: String
    },
    position: {
        type: String
    },
    company: {
        type: String
    },
    salary: {
        type: String
    }
});

module.exports = UserSchema;