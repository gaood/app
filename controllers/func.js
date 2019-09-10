const { query } = require('../utils/query');
const { CHECK_PHONE } = require('../utils/sql');

class FuncCtl{
    async checkPhone(ctx){
        ctx.verifyParams({
            u_phone: { type: 'string', required: true }
        });
        console.log(ctx.request)
        await query(CHECK_PHONE(ctx.request.body['u_phone'])).then(value=>{
            
            if(value.length != 0){
                ctx.body ={
                    message:"手机号已存在",
                    status: -1
                }
            }else{
                ctx.body = {
                    message:"可以注册",
                    status:0
                }
            }
           
            
        }).catch(err=>{
            ctx.body = {
                message:err,
                status:-1
            }
        })
    }
}


module.exports = new FuncCtl();
