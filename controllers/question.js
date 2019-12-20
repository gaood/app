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
        var sqlList = [];
        var sql1 = 'INSERT article_images(articles_id,image_url)VALUES(0000003,"4561");'
        var sql2 = 'INSERT article_images(articles_id,image_url)VALUES(3,"4562");'
        var sql3 = 'INSERT article_images(articles_id,image_url)VALUES(0000003,"4563");'
        // var sql1 = 'INSERT article_type(type_desc)VALUES("4561");'
        // var sql2 = 'INSERT article_type(type_desc)VALUES("4562");'
        // var sql3 = 'INSERT article_type(type_desc)VALUES("4563");'
        sqlList.push(sql1);
        sqlList.push(sql2);
        sqlList.push(sql3);
        console.log(sqlList)
        funcCtl.execTrans(sqlList,(err,info)=>{
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