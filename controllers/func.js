const { pool, query } = require('../utils/query');
const { QUERY_TABLE, CHECK_PHONE } = require('../utils/sql');
const Mock = require('mockjs')
var async = require("async");


class FuncCtl {
  async checkPhone(ctx) {
    ctx.verifyParams({
      u_phone: { type: 'string', required: true }
    });
    console.log(ctx.request)
    await query(CHECK_PHONE(ctx.request.body['u_phone'])).then(value => {

      if (value.length != 0) {
        ctx.body = {
          message: "手机号已存在",
          status: -1
        }
      } else {
        ctx.body = {
          message: "可以注册",
          status: 0
        }
      }


    }).catch(err => {
      ctx.body = {
        message: err,
        status: -1
      }
    })
  }
 execTrans(sqlparamsEntities, callback) {
    return new Promise((resolve, reject)=>{
      pool.getConnection(function (err, connection) {
        if (err) {
          reject("err")
          return callback(err, null);
        }
        connection.beginTransaction(function (err) {
          if (err) {
            reject("err")
            return callback(err, null);
          }
          var funcAry = [];
          var isRes = false
          sqlparamsEntities.forEach(function (sql_param) {
            var temp = function (cb) {
              var param ;
              connection.query(sql_param, param, function (tErr, rows) {
                if (tErr) {

                  connection.rollback(function () {
                    console.log("事务失败，" + sql_param + "，ERROR：" + tErr);
                    isRes = false
                    console.log("123")
                    throw tErr;
                  });
                } else {
                  isRes = true
                  console.log("2222")
                  return cb(null, 'ok');
                }
              })
            };
            funcAry.push(temp);
          });
          if(isRes){
            resolve("ok")
          }else{
            reject(new Error(12));
          }
          async.series(funcAry, function (err, result) {
            console.log("transaction error: " + err);
            if (err) {
              connection.rollback(function (err) {
                console.log("transaction error: " + err);
                connection.release();
                reject("err")
                return callback(err, null);
              });
            } else {
              connection.commit(function (err, info) {
                //console.log("*******transaction info: " + JSON.stringify(info));
                if (err) {
                  console.log("***************执行事务失败，" + err);
                  connection.rollback(function (err) {
                    //console.log("transaction error: " + err);
                    connection.release();
                    reject("err")
                    return callback(err, null);
                  });
                } else {
                  connection.release();
                  resolve(info)
                  return callback(null, info);
                }
              })
            }
          })
        });
      });
    })
  }
  async  _getNewSqlParamEntity(sql, params, callback) {
    if (callback) {
      return callback(null, {
        sql: sql,
        params: params
      });
    }
    return {
      sql: sql,
      params: params
    };
  }
  async test(ctx){
    ctx.body = await Mock.mock({
      'arr|1-10': [{
      'id|+1': 1,
      'author|+1': Random.cname(),
      'img': Random.image('100x100'),
      'title':Random.csentence(5, 9) 
      }]
    }) 
  }
}


module.exports = new FuncCtl();
