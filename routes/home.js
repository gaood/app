const Router = require('koa-router');
const router = new Router();

const homeCtl = require('../controllers/home');
const multer = require('koa-multer');
const path=require('path')


router.get('/',homeCtl.index)



var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images'))
    },
    //修改文件名称
    filename: function (req, file, cb) {
      var fileFormat = (file.originalname).split(".");
      cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
  })
  //加载配置
  var upload = multer({ storage });
  //路由
  var fileList =[] ;
  router.post('/upload', upload.single('file'), async (ctx, next) => {
      console.log(ctx.request.files['files[]'] instanceof Array)
      
      if (ctx.request.files['files[]'] instanceof Array ) {
        ctx.request.files['files[]'].forEach((item,index,array)=>{
          console.log(item)
          console.log(item.path.split('/')[item.path.split('/').length-1])
          console.log(index)
        })
      } 
      
      
    ctx.body = {
      'filename': ctx.request.files['files[]'].name//返回文件名
    }
  })

router.get('/test',homeCtl.test)

module.exports = router;