const Router = require('koa-router');
const router = new Router();
const { QUESTION_INSERT_CONTENT, QUESTION_INSERT_IMAGE } = require('../utils/sql')
const homeCtl = require('../controllers/home');
const multer = require('koa-multer');
const path = require('path')
const funcCtl = require('../controllers/func')

router.get('/', homeCtl.index)



var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'))
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({ storage });
//路由
var fileList = [];
router.post('/upload', upload.single('file'), async (ctx, next) => {
  var sqlParamsEntity = [];
  
  var userid = "5e11f860d47c11e9b0d60ff8b54fb8a9";
  const insertContent = QUESTION_INSERT_CONTENT(
    `"${userid}"`,
    1,
    `"${ctx.request.body.content}"`,
  )
  sqlParamsEntity.push(insertContent);

  //app上
  //var files = ctx.request.files['files[]']

  //pc端
  var files =ctx.request.files.file


  var origin = "http://123.206.230.76"
  if (files instanceof Array) {
    files.forEach((item, index, array) => {
      const basename = path.basename(item.path)
      const insertImage = QUESTION_INSERT_IMAGE(`${origin}/uploads/${basename}`)
      sqlParamsEntity.push(insertImage);
    })
  } else {
    const basename = path.basename(files.path)
    const insertImage = QUESTION_INSERT_IMAGE(`${origin}/uploads/${basename}`)
    sqlParamsEntity.push(insertImage);
  }
  let res = await funcCtl.execTrans(sqlParamsEntity,   (err, info) =>  {
  });
  ctx.body = {
    "message":res
  }
})

router.get('/test', homeCtl.test)

module.exports = router;