import React from 'react'
import Head from 'next/head'
import pageStyle from 'SCSS/publishing/publish.scss'
import I18N from 'I18N'
export default class PublishingIndex extends React.Component {
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={pageStyle.pageContainer}>
                <Head>
                    <title>{langText.seo.publishing.title}</title>
                    <meta name="description" content={langText.seo.publishing.description} />
                    <meta name="keywords" content={langText.seo.publishing.keywords} />
                </Head>
                <div className={pageStyle.adContainer}>
                    <div className={pageStyle.adBox}>
                        <div className={pageStyle.listBox}>
                            <p className={pageStyle.adTitle}>————<span>{langText.app.publishing.adTitle}</span>————</p>
                            <p className={pageStyle.adNumber}>20+</p>
                            <p className={pageStyle.countries}>{langText.app.publishing.countries}</p>
                            <ul>
                                {
                                    langText.app.publishing.adList.map((e, i) => {
                                        return (<li key={i}>{e}</li>)
                                    })
                                }
                            </ul>
                        </div>
                        <div className={pageStyle.pageInfoBox}>
                            <p className={pageStyle.pageTitle}>{langText.app.publishing.pageTitle}</p>
                            <p className={pageStyle.pageSlogan}>{langText.app.publishing.pageSlogan}</p>
                            <a href={`/${language}/contact/information?from=publishing`} target="_blank" className={pageStyle.contactBtn}>{langText.app.publishing.contactUs}</a>
                        </div>
                    </div>
                </div>

                <div className={pageStyle.globalContainer}>
                    <div className={pageStyle.globalBox}>
                        <p className={pageStyle.globalTitle}>{langText.app.publishing.global.title}</p>
                        <p className={pageStyle.globalSubtitle}>{langText.app.publishing.global.subtitle}</p>
                        <p className={pageStyle.globalDesc}>{langText.app.publishing.global.desc}</p>
                    </div>
                </div>
                <div className={pageStyle.workFlowContainer}>
                    <div className={pageStyle.workFlowBox}>
                        <p className={pageStyle.workFlowTitle}>{langText.app.publishing.workFlow.title}</p>
                        {
                            langText.app.publishing.workFlow.flowList.map((e, i) => {
                                return (
                                    <div key={i} className={pageStyle.workFlowItemBox}>
                                        <div className={pageStyle.workFlowDot}></div>
                                        <div className={pageStyle.workFlowDotText}>{'0' + (i + 1)}</div>
                                        <div className={pageStyle.workFlowItemContent}>
                                            <div className={pageStyle.workFlowItemTitleBox}>
                                                <p className={pageStyle.workFlowItemTitle}>{e.title}</p>
                                            </div>
                                            <div className={pageStyle.workFlowItemDesc}>
                                                {
                                                    e.descList.map((ee, j) => {
                                                        return (<p key={j}>{ee}</p>)
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className={pageStyle.workFlowItemIcon + ' ' + pageStyle['workFlowItemIcon' + (i + 1)]}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={pageStyle.exclusiveContainer}>
                    <div className={pageStyle.pageBox}>
                        <p className={pageStyle.title}>{langText.app.publishing.exclusive.title}</p>
                        <p className={pageStyle.slogan}>{langText.app.publishing.exclusive.slogan}</p>
                    </div>
                </div>
                <div className={pageStyle.exclusiveListContainer}>
                    <div className={pageStyle.exclusiveListBox}>
                        {
                            langText.app.publishing.exclusive.list.map((e, i) => {
                                return (
                                    <div key={i} className={pageStyle.exclusiveItem}>
                                        <div className={`${pageStyle.exclusiveIcon} ${pageStyle['exclusiveIcon' + (i + 1)]}`}></div>
                                        <p className={pageStyle.exclusiveTitle}>{e.title}</p>
                                        {
                                            e.descList.map((ee, j) => {
                                                return (<p key={j} className={pageStyle.exclusiveDesc}>{ee}</p>)
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={pageStyle.bottomJoinContainer}>
                    <div className={pageStyle.bottomJoinBox}>
                        <p className={pageStyle.bottomSlogan}>{langText.app.publishing.bottomSlogan}</p>
                        <p className={pageStyle.bottomSubSlogan}>{langText.app.publishing.bottomSubSlogan}</p>
                        <a href={`/${language}/contact/information?from=publishing`} target="_blank" className={pageStyle.bottomContactBtn}>{langText.app.publishing.contactUs}</a>
                    </div>
                </div>
            </div>
        )
    }
}