const Router = require('koa-router');

const router = new Router();
const homeCtl = require('../controllers/home');

router.get('/',homeCtl.index)

router.post('/upload',homeCtl.upload)

router.get('/test',homeCtl.test)
module.exports = router;