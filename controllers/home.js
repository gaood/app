const path = require('path');
const { query } = require('../utils/query');
const { QUERY_TABLE } = require('../utils/sql');
const multer = require('multer');
let fs = require("fs");


class HomeCtl {

    index(ctx) {
        ctx.body = 'Hello , World ! ctl'
    }

    upload(ctx) {
        const file = ctx.request.files.file;
        console.log(file);
        const basename = path.basename(file.path);
        ctx.body = { url:  `http://123.206.230.76/uploads/${basename}` };
    }
    async test(ctx){
        multer({
            dest:'upload'   //upload文件如果不存在则会自己创建一个。
        }).single('file'),(req,res,next)=>{
            if (req.file.length==0) {
                res.render("error",{
                    message:"上传文件不能为空"
                })
                return;
            } else {

                const file = req.file;
                const fileInfo = {};
                console.log(file);
                //这里修改文件名字，比较随意
                fs.readFileSync('./upload/'+file.filename,'./upload/'+file.originalname)
                
                fileInfo.mimetype = file.mimetype;
                fileInfo.originalname = file.originalname;
                fileInfo.size = file.size;
                fileInfo.path = file.path;

                // 设置响应类型及编码
                res.set({
                    'content-type': 'application/json; charset=utf-8'
                });

                res.end("上传成功！");
            }
        }
    
    }

    async test2(){
        var storage = multer.diskStorage({
 
            //将上传的文件存储在指定的位置（不存在的话需要手动创建）
            destination: function (req, file, cb) {
                cb(null, './public/imgs')
            },
            //将上传的文件做名称的更改
            filename: function (req, file, cb) {
                cb(null,  Date.now()+"-"+file.originalname )
            }
        })
         
        //创建multer对象
        //var upload = multer({ storage: storage })
         
        //指定当前字段可以携带多个文件
        //var cpUpload = upload.fields([{ name: 'companylogo', maxCount: 1 }])
        return storage;
    }
   

}

module.exports = new HomeCtl();
