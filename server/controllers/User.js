const User = require('../models/User')
exports.list = async (req, res) => {
    res.json({a: 1})
}

//验证用户信息
exports.info = async (req, res) => {
    res.json(
        {success: true, backData: {username: '', type: ''}, msg: '查询用户身份成功'})
}

//注册
exports.register = async (req, res) => {
    const {username, password, type} = req.body
}