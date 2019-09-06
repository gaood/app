const path = require('path');
const { query } = require('../utils/query');
const { QUERY_TABLE, QUERY_BYID, CREATE_USER, UPDATE_USER, USER_LOGIN } = require('../utils/sql');

class HomeCtl {

    index(ctx) {
        ctx.body = 'Hello , World ! ctl'
    }

    upload(ctx) {
        const file = ctx.request.files.file;
        const basename = path.basename(file.path);
        ctx.body = { url:  `${ctx.origin}/uploads/${basename}` };
    }
    async test(ctx){
        await query(QUERY_TABLE('users')).then(value=>{
            ctx.body = value
        }).catch(err=>{
            ctx.body = err;
        })
    }

}

module.exports = new HomeCtl();