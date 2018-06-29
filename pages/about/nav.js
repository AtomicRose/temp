import React from 'react'
import style from 'SCSS/about/nav.scss'
import I18N from 'I18N'
class AboutNav extends React.Component {
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={style.aboutNav}>
                <div className={style.aboutNavBox}>
                    <ul>
                        <li className={router.query.c_category === 'us' ? style.liActive : ''}><a href={`/${language}/about`}>{langText.app.about.nav[0]}</a></li>
                        <li className={router.query.c_category === 'achievements' ? style.liActive : ''}><a href={`/${language}/achievements`}>{langText.app.about.nav[1]}</a></li>
                        <li className={router.query.c_category === 'join' ? style.liActive : ''}><a href={`/${language}/join`}>{langText.app.about.nav[2]}</a></li>
                        <li className={router.query.c_category === 'contact' ? style.liActive : ''}><a href={`/${language}/contact`}>{langText.app.about.nav[3]}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutNav