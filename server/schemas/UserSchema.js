const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10
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
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return next(err)
        } else {
            //密码加盐
            bcrypt.hash(user.password, salt, (err, hash) => {
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

//匹配密码
UserSchema.methods.comparePassword = async function (_password, cb) {
    try {
        const match = await bcrypt.compare(_password, this.password)
        cb(null, match)
    } catch (e) {
        console.log(e)
        return cb(e)
    }
}

module.exports = UserSchema