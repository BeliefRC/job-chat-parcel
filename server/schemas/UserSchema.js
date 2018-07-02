const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');
const SALT_WORK_FACTOR = 10;
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['genius', 'boss'],
        default: 'genius',
    },
    avatar: {
        type: String,
    },
    //个人简介or职位
    description: {
        type: String,
    },
    position: {
        type: String,
    },
    company: {
        type: String,
    },
    salary: {
        type: String,
    },
})

UserSchema.pre('save', function (next) {
    let user = this
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) {
            return next(err)
        } else {
            //密码加盐
            bcrypt.hash(user.password, salt, null, (err, hash) => {
                if (err) {
                    return next(err)
                } else {
                    user.password = hash
                    next()
                }
            })
        }
    })
})

module.exports = UserSchema