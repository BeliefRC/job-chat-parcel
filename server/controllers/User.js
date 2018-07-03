const bcrypt = require('bcrypt')
const User = require('../models/User')

const _filter = {password: 0, __v: 0}

exports.list = async (req, res) => {
    res.json({a: 1})
}

//验证用户信息
exports.info = async (req, res) => {
    res.json(
        {success: true, backData: {username: '', type: ''}, msg: '查询用户身份成功'})
}

//登录
exports.login = async (req, res) => {
    try {
        const {username, password} = req.body
        let user = await User.findOne({username})
        //判断用户是否存在
        if (user) {
            const match = await bcrypt.compare(password, user.password)
            //判断密码是否正确
            if (match) {
                res.cookie('userId', user._id)
                res.json({
                    success: true,
                    backData: {username, type: user.type, _id: user._id},
                    msg: '登录成功！',
                })
            } else {
                res.json({success: false, backData: {}, msg: '密码错误！'})
            }
        } else {
            res.json({success: false, backData: {}, msg: '用户名不存在！'})
        }
    } catch (e) {
        console.log(e.stack)
        res.json({success: false, backData: {}, msg: e.message})
    }
}
//注册
exports.register = async (req, res) => {
    try {
        const {username, password, type} = req.body
        let user = await User.findOne({username})
        //判断用户是否存在
        if (user) {
            res.json({success: false, backData: {}, msg: '用户名已存在！'})
        } else {
            user = await new User({username, password, type}).save()
            res.cookie('userId', user._id)
            res.json({
                success: true,
                backData: {username, type, _id: user._id},
                msg: '注册成功！',
            })
        }
    } catch (e) {
        console.log(e.stack)
        res.json({success: false, backData: {}, msg: e.message})
    }
}