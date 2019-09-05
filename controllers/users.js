const uuid = require('node-uuid');
const { query } = require('../utils/query');
const { QUERY_TABLE, QUERY_BYID, CREATE_USER, UPDATE_USER, USER_LOGIN } = require('../utils/sql');
const { crytPassWord } = require('../utils/func');
const jsonwebtoken = require('jsonwebtoken');
const { SECRET } = require('../config/mysql_config');




class UsersCtl {
    
    //查询用户信息
    async findById(ctx) {

        await query(QUERY_BYID(ctx.params.id)).then(
            value => {
                ctx.body = `这是用户ID:${ctx.params.id}`;
                if (value == 0) {
                    ctx.throw(412, '用户ID不存在！');
                }
                ctx.body = value
            }
        ).catch(err => {
            err.status = 412
            ctx.body = err
        });
    }
    //更新用户信息
    async update(ctx) {
        ctx.body = `更新用户ID:${ctx.params.id}信息`;
        console.log(ctx.request.body)
        await query(UPDATE_USER(
            ctx.request.body['key'],
            ctx.request.body['value'],
            ctx.params.id
        )).then(value => {
            ctx.body = value
        }).catch(err => {
            console.log(err);
            ctx.body = err;
        })

    }


    //创建用户
    async create(ctx) {
        
        ctx.verifyParams({
            u_name: { type: 'string', required: true },
            u_password: { type: 'string', required: true },
            u_phone: { type: 'string', required: true }
        });
        var uid = uuid.v1().replace(/\-/g, '');
        console.log(ctx.request.body['u_name']);
        console.log(ctx.request.body['u_phone']);
        console.log(ctx.request.body['u_password']);
        console.log(uid);
        var pass = crytPassWord(ctx.request.body['u_password'])
        console.log(pass)
        console.log(pass.length)
        var u_name = ctx.request.body['u_name'];
        await query(CREATE_USER(
            ctx.request.body['u_name'],
            ctx.request.body['u_phone'] * 1,
            uid,
            crytPassWord(ctx.request.body['u_password'])
        )).then(value => {
            console.log("成功！！！")
            console.log(value);
            ctx.body = value;
        });


    }

    //用户登录
    async login(ctx) {
        ctx.verifyParams({
            u_phone: { type: "string", required: true },
            u_password: { type: "string", required: true }
        })
        await query(
            USER_LOGIN(ctx.request.body['u_phone'],
                crytPassWord(ctx.request.body['u_password']))).then(value => {
                    if (value == 0) { ctx.throw(412, "手机号或密码错误！") }
                    const u_phone = value[0]['u_phone'];
                    const u_id = value[0]['u_id'];
                    const token = jsonwebtoken.sign({ u_phone, u_id }, SECRET);
                    console.log(token)
                    ctx.body = value
                }).catch(err => {
                    ctx.body = err
                }
                )
    }
}







module.exports = new UsersCtl();