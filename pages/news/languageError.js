import React from 'react'
import I18N from 'I18N'
import Head from 'next/head'
import detailStyle from 'SCSS/news/newsDetail.scss'
import NextRouter from 'next/router'

class LanguageError extends React.Component {
    handleSeeOther() {
        let routerStr = decodeURIComponent(this.props.router.query.from).replace(this.props.language, (this.props.language === 'zh_CN' ? 'en_US' : 'zh_CN'))
        NextRouter.push({
            pathname: routerStr
        })
    }
    render() {
        const { router, language } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={detailStyle.newsDetailPage}>
                <div className={detailStyle.newsContainer}>
                    <div className={detailStyle.newsBox}>
                        <img src="/static/images/language_error.png" className={detailStyle.languageErrorImg} alt="" />
                        <p className={detailStyle.languageTip}>{langText.app.news.languageNotSupport}</p>
                        <p className={detailStyle.seeOtherLanguage} onClick={() => this.handleSeeOther()}><span>{langText.app.news.seeOther}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanguageError