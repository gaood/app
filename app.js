const Koa = require('koa');
const app = new Koa();
const path = require('path');
const koaBody = require('koa-body');
const routing = require('./routes');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const koaStatic = require('koa-static');


app.use(koaStatic(path.join(__dirname,'public')))
app.use(koaBody({
    multipart:true,
    formidable:{
        uploadDir:path.join(__dirname,'/public/uploads'),
        keepExtensions:true,//是否保留扩展名
    }
}));
app.use(parameter(app));
app.use(error());


routing(app);



app.listen(4000)

