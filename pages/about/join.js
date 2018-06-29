import React from 'react'
import aboutStyle from 'SCSS/about/about.scss'
import pageStyle from 'SCSS/about/join.scss'
import ColorBar from './bar'
import AboutNav from './nav'
import I18N from 'I18N'

class AboutUs extends React.Component {
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        const cards = langText.app.join.card
        let cardItems = []
        cards.map((e, i) => {
            cardItems.push(<div key={i} className={pageStyle.cardItem}>
                <div className={pageStyle.cardBox}>
                    <div className={pageStyle.cardPadding}></div>
                    <div className={pageStyle.cardContent}>
                        <p className={pageStyle.slogan}>{e.slogan}</p>
                        <p className={pageStyle.title}>{e.title}</p>
                        <p className={pageStyle.desc}>{e.desc}</p>
                    </div>
                    <div className={pageStyle.avatar + ' ' + pageStyle['avatar' + (i + 1)]}></div>
                    <div className={pageStyle.icon_top + ' ' + pageStyle['icon_top' + (i + 1)]}></div>
                    <div className={pageStyle.icon_bottom + ' ' + pageStyle['icon_bottom' + (i + 1)]}></div>
                </div>
            </div>)
        })
        return (
            <div className={aboutStyle.aboutPage}>
                <ColorBar language={this.props.language} router={this.props.router} />
                <AboutNav language={this.props.language} router={this.props.router} />
                <div className={pageStyle.pageContainer}>
                    <div className={pageStyle.pageBox}>
                        <div className={pageStyle.training}>
                            <p className={pageStyle.trainingTitle}>{langText.app.join.training.title}</p>
                            <p className={pageStyle.trainingDesc}>{langText.app.join.training.desc}</p>
                        </div>
                        <div className={pageStyle.vacanciesCard}>
                            {cardItems}
                        </div>
                        <div className={pageStyle.career}>
                            <div className={pageStyle.careerBox}>
                                <div className={pageStyle.box}>
                                    <p className={pageStyle.careerTitle}>{langText.app.join.career.title}</p>
                                    <p className={pageStyle.careerDesc}>{langText.app.join.career.desc}</p>
                                    <img src="/static/images/about/career.png" alt="" />
                                </div>
                                <div className={pageStyle.box}>
                                    <img src="/static/images/about/salary.png" alt="" />
                                    <p className={pageStyle.careerTitle}>{langText.app.join.salary.title}</p>
                                    <p className={pageStyle.careerDesc}>{langText.app.join.salary.desc}</p>
                                </div>
                            </div>
                            <div className={pageStyle.careerBox2}>
                                <div className={pageStyle.box}>
                                    <p className={pageStyle.careerTitle}>{langText.app.join.career.title}</p>
                                    <p className={pageStyle.careerDesc}>{langText.app.join.career.desc}</p>
                                    <hr/>
                                    <img src="/static/images/about/career.png" alt="" />
                                    <hr/>
                                </div>
                                <div className={pageStyle.box}>
                                    <p className={pageStyle.careerTitle}>{langText.app.join.salary.title}</p>
                                    <p className={pageStyle.careerDesc}>{langText.app.join.salary.desc}</p>
                                    <hr/>
                                    <img src="/static/images/about/salary.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={pageStyle.link}>
                    <p className={pageStyle.workTip1}>{langText.app.join.workTip1.toUpperCase()}</p>
                    <p className={pageStyle.workTip2}>{langText.app.join.workTip2}</p>
                    <a href={`/${language}/join/job`} target="_blank" ><div className={pageStyle.workBtn}>{langText.app.join.workBtn}</div></a>
                </div>
            </div>
        )
    }
}

export default AboutUs