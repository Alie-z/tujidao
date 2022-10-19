const Router = require('@koa/router');
const router = new Router();
const search = require('../module/searchPhoto');

router.get('/search', async (ctx) => {
    const { kw, page } = ctx.query;
    const res = await search(kw, page);
    ctx.body = res;
});

module.exports = router;
