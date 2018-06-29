import React from 'react'
import style from 'SCSS/components/newsLoading.scss'
import I18N from 'I18N'
class Loading extends React.Component {
    render() {
          const {language} = this.props
        const langText = I18N.langText(language)
        return (
            <div className={style.newsLoading}>
                <span className={style.loadIcon}></span><span className={style.loadText}>{langText.app.news.loading}</span>
            </div>
        )
    }
}

export default Loading