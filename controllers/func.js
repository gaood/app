const { pool, query } = require('../utils/query');
const { CHECK_PHONE } = require('../utils/sql');
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
  async execTrans(sqlparamsEntities, callback) {
    pool.getConnection(function (err, connection) {
      if (err) {
        return callback(err, null);
      }
      connection.beginTransaction(function (err) {
        if (err) {
          return callback(err, null);
        }
        console.log("开始执行transaction，共执行" + sqlparamsEntities.length + "条数据");
        var funcAry = [];
        sqlparamsEntities.forEach(function (sql_param) {
          var temp = function (cb) {
            var sql = sql_param.sql;
            var param = sql_param.params;
            connection.query(sql_param, param, function (tErr, rows) {
              if (tErr) {
                connection.rollback(function () {
                  console.log("事务失败，" + sql_param + "，ERROR：" + tErr);
                  throw tErr;
                });
              } else {
                return cb(null, 'ok');
              }
            })
          };

          funcAry.push(temp);

        });



        async.series(funcAry, function (err, result) {

          console.log("transaction error: " + err);

          if (err) {

            connection.rollback(function (err) {

              console.log("transaction error: " + err);

              connection.release();

              return callback(err, null);

            });

          } else {

            connection.commit(function (err, info) {

              console.log("*******transaction info: " + JSON.stringify(info));

              if (err) {

                console.log("***************执行事务失败，" + err);

                connection.rollback(function (err) {

                  console.log("transaction error: " + err);

                  connection.release();

                  return callback(err, null);

                });

              } else {

                connection.release();

                return callback(null, info);

              }

            })

          }

        })

      });

    });

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
}


module.exports = new FuncCtl();
