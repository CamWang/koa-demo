import Router from '@koa/router';

const router = new Router();

router.get('/', ctx => {
    ctx.body = "Hello World";
});

router.get('/user', ctx => {
    ctx.body = "CamWang";
});

export {
    router
};