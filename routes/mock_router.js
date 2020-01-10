const Router = require('koa-router');
const router = new Router({ prefix: '/mockjs' });
const MockController = require("../controllers/mock_controllers")

router.get("/index", MockController.index)
router.get("/comment", MockController.comment)
router.get("/question", MockController.question)

module.exports = router