const Router = require('koa-router');


const router = new Router({prefix: '/check'});
const FuncCtl = require('../controllers/func');



router.post('/phone',FuncCtl.checkPhone);

module.exports = router;