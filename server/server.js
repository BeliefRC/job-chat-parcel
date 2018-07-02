const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const Router=require('./config/Router');
const app = express();

//数据库连接
const dbUrl = 'mongodb://localhost/jobChatParcel';
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl)
    .then(() => {
        console.log(`已连接${dbUrl}`);

    }).catch((e) => {
    console.log(e.stack);
});

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:2345');
    res.header("Access-Control-Allow-Headers", "Content-Type,x-requested-with");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", 'beliefrc@outlook.com');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', Router);

app.listen(9093, () => {
    console.log(`Server start at port 9093`);
});