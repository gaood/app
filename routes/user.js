const Router = require('koa-router');

const router = new Router({ prefix: '/users' });
const jsonwebtoken = require('jsonwebtoken');
const usersCtl = require('../controllers/users');
const { SECRET } = require('../config/mysql_config');
const jwt = require('koa-jwt');
const permissionCtl = require('../controllers/permission');

// 用户认证
const auth = jwt({ SECRET });

//查询单个用户信息
router.get('/:id',permissionCtl.checkOwner, usersCtl.findById)
// 更新用户信息
router.put('/:id', permissionCtl.auth,permissionCtl.checkOwner, usersCtl.update)
//注册用户号
router.post('/register', usersCtl.create)
//用户登录
router.post('/login', usersCtl.login)

module.exports = router;
