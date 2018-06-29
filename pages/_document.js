import React from 'react'
import getConfig from 'next/config'
import Document, { Head, Main, NextScript } from 'next/document'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        /**
         * pathname     对应page的真实地址，即文件名
         * query
         * asPath       对应访问路径    
         * headers
         */
        // console.log(ctx.req.headers)
        // 此处需要根据user-agent来判断设备类型，然后进行设置
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    {/* <title>炫踪网络 – 全球领先的游戏开发商&amp;发行商</title>
                    <meta name="description" content="炫踪网络成立于2011年，专注游戏研发与海外发行；公司汇集了全球多个地区的优秀人才，拥有强大的海外市场拓展能力，并具备丰富的全球发行和本地化运营经验。目前已与多个地区的知名互联网媒体及社交平台开展了长期战略合作，公司也构建了领先、开放、共赢的游戏产品研发孵化。" />
                    <meta name="keywords" content="炫踪网络,游戏孵化,游戏发行,游戏出海" /> */}
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    {/* -----Here is the antd css------ */}
                    {/* <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/antd.css`} /> */}
                    <script src={`${publicRuntimeConfig.staticFolder}/mediascreen.js`}></script>
                    <script src={`${publicRuntimeConfig.staticFolder}/browser.js`}></script>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}