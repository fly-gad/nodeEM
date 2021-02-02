/*
 * @Author: MrZhang
 * @Date: 2021-02-02 15:24:09
 * @Description:接口
 */
const db = require("../../http/db")

const user = (err, res) => {
    let sql = 'SELECT * FROM user' //user为表名
    let sqlArr = []
    let callback = (err, data) => {
        if (err) {
            console.log("连接失败");
        } else {
            res.send({
                list: data
            })
        }
    }
    db.sqlconnection(sql, sqlArr, callback)
}

module.exports = {
    user
}