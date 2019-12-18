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
      console.log(ctx.request.body)
      var files = ctx.request.files['files[]']
      var origin = "http://123.206.230.76"
      var backUrl = []
      console.log(files)
      if (files instanceof Array ) {
        files.forEach((item,index,array)=>{
          const basename = path.basename(item.path)
          const itemUrl = {
            'url':`${origin}/uploads/${basename}`
          } 
          backUrl.push(itemUrl)

        })
      } else{
          console.log(files)
          const basename = path.basename(files.path)
          console.log(basename)
          itemUrl= {
            url:`${origin}/uploads/${basename}`
          }
          backUrl.push(itemUrl)
      }
      console.log(backUrl)
      ctx.body = backUrl
  })

router.get('/test',homeCtl.test)

module.exports = router;