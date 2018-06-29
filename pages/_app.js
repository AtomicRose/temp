import React from 'react'
import App, { Container } from 'next/app'
import Layout from './layout/Layout'
import { withRouter } from 'next/router'
import Head from 'next/head'
import I18N from 'I18N'

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            // getInitialProps钩子，
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }
    render() {
        const { Component, pageProps, router } = this.props
        let lang = I18N.isSupported(router.asPath)
        const langText = I18N.langText(lang)
        return (<Container>
            <Layout language={lang} router={this.props.router}>
                <Head>
                    <title>{langText.seo.home.title}</title>
                    <meta name="description" content={langText.seo.home.description} />
                    <meta name="keywords" content={langText.seo.home.keywords} />
                </Head>
                <Component {...pageProps} router={this.props.router} language={lang} />
            </Layout>
        </Container>)
    }
}

export default withRouter(MyApp)