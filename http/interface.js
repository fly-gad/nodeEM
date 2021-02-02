/*
 * @Author: MrZhang
 * @Date: 2021-02-02 09:57:42
 * @Description: 接口列表
 */

const app = require("express").Router();
const api = require('../src/api/index')

// 查询
app.get('/user', api.user)

module.exports = app;