const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const mobxReact = require('mobx-react')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors');
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const toolsRouter = require('./tools')
const zh_CN_Router = require('./zh_CN')
const en_US_Router = require('./en_US')


mobxReact.useStaticRendering(true)

app.prepare().then(() => {
    const server = new Koa()

    let router = new Router()
    let tools = toolsRouter(app)
    let zh_CN = zh_CN_Router(app)
    let en_US = en_US_Router(app)
    router.use('/tools', tools.routes(), tools.allowedMethods())
    router.use('/zh_CN', zh_CN.routes(), zh_CN.allowedMethods())
    router.use('/en_US', en_US.routes(), en_US.allowedMethods())

    // example page.
    router.get('/example', async (ctx, next) => {
        const actualPage = '/example'
        const queryParams = {}
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    router.get('/example/antd', async (ctx, next) => {
        const actualPage = '/example-antd'
        const queryParams = {}
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    // ------------------------------------example end-------------------------------------------------
    // error page.
    router.get('/error', async (ctx, next) => {
        const actualPage = '/error'
        const queryParams = {}
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    // root url, return home page. Just index page.
    router.get('/', async (ctx, next) => {
        const actualPage = '/'
        const queryParams = {
            category: 'home'
        }
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    router.get('', async (ctx, next) => {
        const actualPage = '/'
        const queryParams = {
            category: 'home'
        }
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    // other url, return 404 page
    router.get('*', async (ctx, next) => {
        await handle(ctx.req, ctx.res)
        // await app.render(ctx.req, ctx.res, '/404', {})
    })
    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })
    server.use(bodyParser())
    server.use(cors({
        origin: function (ctx) {
            return '*';
        },
        maxAge: 5,
        credentials: true,
        exposeHeaders: [],
        allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'authorization']
    }));

    server.use(router.routes()).use(router.allowedMethods())
    server.listen(7001)

})