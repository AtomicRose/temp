import React from 'react'
import style from 'SCSS/browser/browser.scss'
import I18N from 'I18N'
class BrowserSupport extends React.Component {
    componentDidMount() {
    }
    render() {
        const { router, language } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={style.browserPage}>
                <div className={style.browserContainer}>
                    <div className={style.browserBox}>
                        <p className={style.tip1}>{langText.app.browser.tip1}</p>
                        <p className={style.tip2}>{langText.app.browser.tip2}</p>
                        <p className={style.tip3}>{langText.app.browser.tip3}</p>
                        <img className={style.browserPic} src="/static/images/browser_support.png" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default BrowserSupport