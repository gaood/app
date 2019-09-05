const mysql = require('mysql');
//数据库配置
const { MYSQL_CONFIG } = require('../config/mysql_config')

// mysql

const pool = mysql.createPool(MYSQL_CONFIG)

// query sql 语句入口
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err.message)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()//释放连接池
        })
      }
    })
  }).catch(err => {
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqq")
    console.log(err)
  })
}


module.exports = {
  query
}