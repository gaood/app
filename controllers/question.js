const funcCtl = require('./func')
const { QUESTION_INSERT_TYPE} = require('../utils/sql')

class QuestionCtl{
    
    //插入
    async insert(ctx){
        
        console.log(ctx.request.body);
        console.log(ctx.request.body.content)
        ctx.body = {
            "content":ctx.request.body.content,
            "type":ctx.request.body.type
        }
        return "ok"
        /** 
        console.log(QUESTION_INSERT_TYPE('实时插入',1));
        ctx.body = ctx.request.body;
        var sqlParamsEntity = [];
        const sql1 = `INSERT article_type(type_desc,type_weight) VALUES('大盘1',0);`
        const sql2 = `INSERT article_type(type_desc,type_weigh) VALUES('大盘2',0);`
        sqlParamsEntity.push(sql1);
        sqlParamsEntity.push(sql2);
        console.log(sqlParamsEntity);
        funcCtl.execTrans(sqlParamsEntity,(err, info)=>{
            if(err){
                console.error("事务执行失败******************");
                ctx.throw(412,err);
                ctx.body = err;
            }else{
                console.log("done.");
                console.log(info);
                var ret = info;
            }
        })
        //QuestionCtl.prototype.type(ctx)
        */
    }
    //添加图片
    async image(ctx){}
    // 添加类别
    async type(ctx){
        console.log("@@@@@@@@")
        ctx.body="sfsdfdsf"
        
    }
}

module.exports = new QuestionCtl();