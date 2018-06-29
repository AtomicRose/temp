const router = require('koa-router')()
function setRouters(nextApp) {
    router.get('/example', async (ctx, next) => {
        const actualPage = '/example'
        const queryParams = {}
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/error', async (ctx, next) => {
        const actualPage = '/error'
        const queryParams = {}
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/', async (ctx, next) => {
        const actualPage = '/'
        const queryParams = {
            category: 'home'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/news', async (ctx, next) => {
        const actualPage = '/news/news'
        const queryParams = {
            category: 'news'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/news/:newsId', async (ctx, next) => {
        const actualPage = '/news/newsDetail'
        const queryParams = {
            category: 'news',
            newsId: ctx.params.newsId
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/publish', async (ctx, next) => {
        const actualPage = '/publishing/publish'
        const queryParams = {
            category: 'publishing'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/incubator', async (ctx, next) => {
        const actualPage = '/incubator/incubator'
        const queryParams = {
            category: 'incubator'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/browser', async (ctx, next) => {
        const actualPage = '/browserSupport'
        const queryParams = {
            category: 'news'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/legalNotice', async (ctx, next) => {
        const actualPage = '/news/legalNotice'
        const queryParams = {
            category: 'news'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/childProtection', async (ctx, next) => {
        const actualPage = '/news/childProtection'
        const queryParams = {
            category: 'news'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/regulationConvention', async (ctx, next) => {
        const actualPage = '/news/regulationConvention'
        const queryParams = {
            category: 'news'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/accountAgreement', async (ctx, next) => {
        const actualPage = '/news/accountAgreement'
        const queryParams = {
            category: 'other'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/languageError', async (ctx, next) => {
        const actualPage = '/news/languageError'
        const queryParams = {
            category: 'news',
            from: ctx.request.query.from
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/about', async (ctx, next) => {
        const actualPage = '/about/us'
        const queryParams = {
            category: 'about',
            c_category: 'us'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/achievements', async (ctx, next) => {
        const actualPage = '/about/achievements'
        const queryParams = {
            category: 'about',
            c_category: 'achievements'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/join', async (ctx, next) => {
        const actualPage = '/about/join'
        const queryParams = {
            category: 'about',
            c_category: 'join'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/join/job', async (ctx, next) => {
        const actualPage = '/about/job'
        const queryParams = {
            category: 'about',
            c_category: 'join'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/contact', async (ctx, next) => {
        const actualPage = '/about/contact'
        const queryParams = {
            category: 'about',
            c_category: 'contact'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/contact/information', async (ctx, next) => {
        const actualPage = '/about/contactInfo'
        const queryParams = {
            category: 'about',
            c_category: 'contact',
            from: ctx.request.query.from
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/contact/incubation', async (ctx, next) => {
        const actualPage = '/about/incubationInfo'
        const queryParams = {
            category: 'incubator',
            c_category: 'contact',
            from: ctx.request.query.from
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    return router
}

module.exports = setRouters
