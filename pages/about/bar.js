import React from 'react'
import style from 'SCSS/about/bar.scss'
import I18N from 'I18N'

class Bar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleIndex: 1
        }
    }
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        let containerStyle = style['barContainer' + this.state.styleIndex.toString()];
        // switch(router.query.c_category) {
        //     case 'about': {
        //         containerStyle = style.barContainer1
        //         break
        //     }
        //     case 'achievements': {
        //         containerStyle = style.barContainer2
        //         break
        //     }
        //     case 'join': {
        //         containerStyle = style.barContainer3
        //         break
        //     }
        //     case 'contact': {
        //         containerStyle = style.barContainer4
        //         break
        //     }
        //     default : {
        //         break
        //     }
        // }
        return (
            <div className={style.barContainer} id="aboutBar">
                <div className={style.barBox}>
                    <div className={style.bar}>
                        <p><span className={style.companyName}>{langText.app.siteInfo.companyName}</span><span className={style.slogan}>{langText.app.siteInfo.slogan}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bar