const Router = require('koa-router');

const router = new Router({ prefix: '/question' });
const permissionCtl = require('../controllers/permission');
const questionCtl = require('../controllers/question');


router.post('/insert',questionCtl.insert);

module.exports = router;