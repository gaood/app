const  indexData = require("../mockjs/index")
const comment_list = require("../mockjs/comment")
const question_list = require("../mockjs/question")

class MockController{
    async index(ctx){
        ctx.body= await indexData
    }
    async comment(ctx){
        ctx.body = await comment_list
    }
    async question(ctx){
        ctx.body = await question_list
    }
}


module.exports = new MockController()