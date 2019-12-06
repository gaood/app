const funcCtl = require('./func')
const { QUESTION_INSERT_CONTENT ,QUESTION_INSERT_IMAGE} = require('../utils/sql')

class QuestionCtl{
    
    //插入
    async insert(ctx){
        
        console.log(ctx.request.body);
        console.log(ctx.request.body.content)
        ctx.body = {
            "content":ctx.request.body.content,
            "type":ctx.request.body.type
        }
    

        // var sqlParamsEntity = [];
        // const insertContent = QUESTION_INSERT_CONTENT() 
        // const insertImage = QUESTION_INSERT_IMAGE()
        // sqlParamsEntity.push(insertContent);
        // sqlParamsEntity.push(insertImage);
        // console.log(sqlParamsEntity);
        // funcCtl.execTrans(sqlParamsEntity,(err, info)=>{
        //     if(err){
        //         console.error("事务执行失败******************");
        //         ctx.throw(412,err);
        //         ctx.body = err;
        //     }else{
        //         console.log("done.");
        //         console.log(info);
        //         var ret = info;
        //     }
        // })
       
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