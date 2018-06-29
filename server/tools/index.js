const router = require('koa-router')()
const QRCode = require('qrcode')
function setRouters(nextApp) {
    router.post('/generateQRCode', async (ctx, next) => {
        let req = ctx.request
        try {
            if (req.body && req.body.text) {
                ctx.body = {
                    url: await QRCode.toDataURL(req.body.text)
                }
            } else {
                ctx.body = {
                    error: 'no request text.'
                }
            }

        } catch (e) {
            console.log('server error', e)
        }

    })
    return router
}

module.exports = setRouters
