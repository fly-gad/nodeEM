/*
 * @Author: MrZhang
 * @Date: 2021-02-02 09:57:42
 * @Description: 登录后台接口公共入口
 */

const app = require("express").Router();
const login = require('../../src/catmanvalley_api/login')

//验证码
app.post('/sendCode', login.sendCode)

//验证码
app.post('/user', login.user)

//免密登录
app.post('/login', login.codePhoneLogin)

//帐号密码登录 
app.post('/accountPassWordlogin', login.accountPassWordlogin)

//用户信息
app.post('/accuntinfo', login.accuntinfo)

//修改密码
app.post('/modifypassword', login.modifypassword)

module.exports = app;