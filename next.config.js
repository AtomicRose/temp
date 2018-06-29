const path = require('path')
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const rootPath = path.resolve(__dirname, './')

const env = process.env.NODE_ENV

const PROD_ENV = 'production'
const ALPHA_ENV = 'alpha'
const TEST_ENV = 'test'
const DEV_ENV = 'development'
const dev = env === DEV_ENV

module.exports = (phase, { defaultConfig }) => {
    // common setting
    let config = withSass(withCSS({
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]"
        },
        distDir: 'dist',
        generateBuildId: async () => {
            // For example get the latest git commit hash here
            return 'ShinezoneApplication'
        },
        publicRuntimeConfig: { // Will be available on both server and client
            staticFolder: '/static'
        },
        webpack(config, { dev }) {
            // Further custom configuration here
            config.resolve = {
                alias: {
                    PAGES: path.resolve(rootPath, 'pages'),
                    SCSS: path.resolve(rootPath, 'pages/scss'),
                    COMPONENTS: path.resolve(rootPath, 'pages/components'),
                    WIDGETS: path.resolve(rootPath, 'pages/widgets'),
                    CONFIG: path.resolve(rootPath, 'config'),
                    UTILS: path.resolve(rootPath, 'utils'),
                    I18N: path.resolve(rootPath, 'utils/i18n'),
                    STORE: path.resolve(rootPath, 'store'),
                    API: path.resolve(rootPath, 'API')
                }
            }
            // if (!config.module.rules) {
            //     config.module.rules = []
            // }
            // config.module.rules.push(
            //     {
            //         test: /\.less$/,
            //         use: ['style-loader', 'css-loader', { loader: 'less-loader', options: { javascriptEnabled: true } }],
            //         include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/antd')]
            //     }
            // )
            config.plugins.push(
                new webpack.DefinePlugin({
                    "globalEnv": JSON.stringify(env),
                    __DEV__: env === DEV_ENV,
                    __TEST__: env === TEST_ENV,
                    __ALPHA__: env === ALPHA_ENV,
                    __PROD__: env === PROD_ENV
                })
            )
            if (env !== DEV_ENV) {
                config.plugins.push(
                    new UglifyJsPlugin({
                        test: /\.js($|\?)/i,
                        parallel: 4
                    })
                )
            }
            if (dev) {
                config.module.rules.push(
                    {
                        test: /\.js$/,
                        enforce: 'pre',
                        exclude: /node_modules/,
                        loader: 'eslint-loader',
                        options: {
                            // Emit errors as warnings for dev to not break webpack build.
                            // Eslint errors are shown in console for dev, yay :-)
                            // emitWarning: dev,
                        }
                    }
                )
            }
            return config
        },
        exportPathMap: async function (defaultPathMap) {
            return {
                '/': {
                    page: '/'
                },
                '/en_US/news': {
                    page: '/news/news',
                    query: {
                        category: 'news'
                    }
                }
            }
        }
    }))
    // only in development setting
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return Object.assign({}, config, {

        })
    }


    return Object.assign({}, config, {

    })
}