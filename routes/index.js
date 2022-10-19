const Router = require('@koa/router');
const router = new Router();

router.get('/string', async (ctx, next) => {
    ctx.body = {
        success: true,
        data: '爬取成功12233！！'
    };
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json123214'
    };
});

module.exports = router;
