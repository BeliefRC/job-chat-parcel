/** 2018/7/2
*作者:BeliefRC
*功能: 后端路由配置
*/
const express = require('express');
const User=require('../controllers/User');
const Router = express.Router();

Router.get('/list', User.list);
Router.get('/info', User.info);
Router.get('/register', User.register);

module.exports = Router;
