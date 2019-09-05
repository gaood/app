const jsonwebtoken = require('jsonwebtoken');
const { SECRET }= require('../config/mysql_config');




class PermissionCtl {
    // 用户认证
    async auth(ctx, next) {
        const { authorization = '' } = ctx.request.header;
        const token = authorization.replace('Bearer ', '');
        console.log(token)
        try {
            const user = jsonwebtoken.verify(token, SECRET);
            ctx.state.user = user;
        } catch (error) {
            ctx.throw(401, error.message);
        }
        await next();

    }

    //检查是否拥有权限
    async checkOwner(ctx,next){
        console.log(ctx.params.id)
        console.log(ctx.state.user);
        
        if (ctx.params.id !== ctx.state.user.u_id){ctx.throw(403,'没有权限')}
        await next();
    }
}

module.exports = new PermissionCtl();