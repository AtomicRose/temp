import React from 'react'
import I18N from 'I18N'
import Head from 'next/head'
import detailStyle from 'SCSS/news/newsDetail.scss'
import NextRouter from 'next/router'

class ChildProtection extends React.Component {
    componentDidMount() {
        if (this.props.language !== 'zh_CN') {
            NextRouter.push({
                pathname: `/${this.props.language}/languageError`,
                query: {
                    from: encodeURIComponent(this.props.router.asPath)
                }
            })
        }
    }
    render() {
        const { router, language } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={detailStyle.newsDetailPage}>
                <div className={detailStyle.newsContainer}>
                    <div className={detailStyle.newsBox} style={{ textAlign: 'center' }}>
                        <img src="/static/images/about/regulationConvention1.png" style={{ maxWidth: '100%' }} alt="" />
                        <img src="/static/images/about/regulationConvention2.png" style={{ maxWidth: '100%' }} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChildProtection