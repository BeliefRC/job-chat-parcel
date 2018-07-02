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
    try {
        const {username, password, type} = req.body
        let user = await User.findOne({username})
        if (user) {
            res.json({success: false, backData: {}, msg: '用户名已存在！'})
        } else {
            user = await new User({username, password, type}).save()
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