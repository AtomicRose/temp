import React from 'react'
import Head from 'next/head'
import pageStyle from 'SCSS/incubation/incubation.scss'
import publishStyle from 'SCSS/publishing/publish.scss'
import I18N from 'I18N'
import { WSAEINPROGRESS } from 'constants';

export default class IncubatorIndex extends React.Component {
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={pageStyle.pageContainer}>
                <Head>
                    <title>{langText.seo.incubation.title}</title>
                    <meta name="description" content={langText.seo.incubation.description} />
                    <meta name="keywords" content={langText.seo.incubation.keywords} />
                </Head>
                <div className={pageStyle.incubationAdContainer}>
                    <div className={pageStyle.incubationAdBox}>
                        <p className={pageStyle.pageTitle}>{langText.app.incubation.pageTitle}</p>
                        <p className={pageStyle.pageSlogan}>{langText.app.incubation.pageSlogan}</p>
                        <a href={`/${language}/contact/incubation?from=incubation`} target="_blank" className={pageStyle.joinBtn}>{langText.app.incubation.joinUs}</a>
                    </div>
                </div>
                <div className={pageStyle.centerContainer}>
                    <div className={pageStyle.centerBox}>
                        <p className={pageStyle.centerTitle}>{langText.app.incubation.centerTitle}</p>
                        <p className={pageStyle.centerDesc}>{langText.app.incubation.centerDesc}</p>
                        <div className={pageStyle.videoContainer}>
                            <video id="officialVideo" src="/static/videos/official.mp4" controls></video>
                        </div>
                    </div>
                </div>
                <div className={pageStyle.aboutIncubationContainer}>
                    <div className={pageStyle.aboutIncubationBox}>
                        <p className={pageStyle.aboutIncubationTitle}>{langText.app.incubation.aboutIncubation}</p>
                        <p className={pageStyle.learnMore}>{langText.app.incubation.learnMore}</p>
                    </div>
                    <div className={pageStyle.triangleDown}></div>
                </div>
                <div className={pageStyle.stepOneContainer}>
                    <div className={pageStyle.stepOneBox}>
                        <p className={pageStyle.stepNumber}>01</p>
                        {
                            language === 'zh_CN' ? <p className={pageStyle.stepTitle}><span className={pageStyle.white}>{langText.app.incubation.mission.substr(0, 3)}</span><span className={pageStyle.primary}>{langText.app.incubation.mission.substr(3, 2)}</span></p>
                                : <p className={pageStyle.stepTitle}><span className={pageStyle.primary}>{langText.app.incubation.mission.substr(0, 2)}</span><span className={pageStyle.white}>{langText.app.incubation.mission.substring(2, langText.app.incubation.mission.length)}</span></p>
                        }

                        <p className={pageStyle.howTextPrimary}>{langText.app.incubation.missionSub}</p>
                        <p className={pageStyle.missionContent}>{langText.app.incubation.missionDesc}</p>
                    </div>
                </div>
                <div className={pageStyle.stepTwoContainer}>
                    <div className={pageStyle.stepTwoBox}>
                        <p className={pageStyle.stepNumber}>02</p>
                        {
                            language === 'zh_CN' ? <p className={pageStyle.stepTitle}><span className={pageStyle.black}>{langText.app.incubation.process.title.substr(0, 2)}</span><span className={pageStyle.primary}>{langText.app.incubation.process.title.substr(2, 2)}</span></p>
                                : <p className={pageStyle.stepTitle}><span className={pageStyle.primary}>{langText.app.incubation.process.title.split(' ')[0]}</span> <span className={pageStyle.black}>{langText.app.incubation.process.title.split(' ')[1]}</span></p>
                        }

                        <p className={pageStyle.howTextPrimary}>{langText.app.incubation.process.how}</p>
                        <div className={pageStyle.arrowProcessBox}>
                            {
                                langText.app.incubation.process.stepList.map((e, i) => {
                                    return (
                                        <div key={i} className={pageStyle.arrowItem}>
                                            <div className={pageStyle.arrowBg}>
                                                <div className={pageStyle.arrowContent}>
                                                    <div className={`${pageStyle.processIcon} ${pageStyle['processIcon' + (i + 1)]}`}></div>
                                                    <p className={pageStyle.processDesc}>{e}</p>
                                                </div>
                                            </div>
                                            <div className={pageStyle.arrowL}></div>
                                            <div className={pageStyle.arrowR}></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={pageStyle.stepThreeContainer}>
                    <div className={pageStyle.threeLargeBox}>
                        <div className={pageStyle.stepThreeBox}>
                            <p className={pageStyle.stepNumberBlack}>03</p>
                            {
                                language === 'zh_CN' ? <p className={pageStyle.stepTitle}><span className={pageStyle.black}>{langText.app.incubation.selection.title.substr(0, 2)}</span><span className={pageStyle.primary}>{langText.app.incubation.selection.title.substr(2, 2)}</span></p>
                                    : <p className={pageStyle.stepTitle}><span className={pageStyle.black}>{langText.app.incubation.selection.title.split(' ')[0]}</span> <span className={pageStyle.primary}>{langText.app.incubation.selection.title.split(' ')[1]}</span></p>
                            }
                            <p className={pageStyle.howTextWhite}>{langText.app.incubation.selection.how}</p>
                        </div>
                        <div className={pageStyle.blackBox}>
                            <div className={pageStyle.blackRow}>
                                <div className={pageStyle.keyBox + ' ' + pageStyle.requireKey2}>
                                    {
                                        language === 'zh_CN' ? <p className={pageStyle.keyStyle}><span className={pageStyle.keyWhite}>{langText.app.incubation.selection.require.title.substr(0, 2)}</span><span className={pageStyle.keyPrimary}>{langText.app.incubation.selection.require.title.substr(2, 2)}</span></p>
                                            : <p className={pageStyle.keyStyle}><span className={pageStyle.keyPrimary}>{langText.app.incubation.selection.require.title.split(' ')[0]}</span>{' '}<span className={pageStyle.keyWhite}>{langText.app.incubation.selection.require.title.split(' ')[1]}</span></p>
                                    }
                                </div>
                                <div className={`${pageStyle.textBox} ${pageStyle.requireBox}`}>
                                    <div className={pageStyle.triangleRight}></div>
                                    {
                                        langText.app.incubation.selection.require.list.map((e, i) => {
                                            return (<p key={i}>{e}</p>)
                                        })
                                    }
                                    <img src="/static/images/incubation/require_bg.png" alt="" />
                                </div>
                                <div className={pageStyle.keyBox + ' ' + pageStyle.requireKey}>
                                    {
                                        language === 'zh_CN' ? <p className={pageStyle.keyStyle}><span className={pageStyle.keyWhite}>{langText.app.incubation.selection.require.title.substr(0, 2)}</span><span className={pageStyle.keyPrimary}>{langText.app.incubation.selection.require.title.substr(2, 2)}</span></p>
                                            : <p className={pageStyle.keyStyle}><span className={pageStyle.keyPrimary}>{langText.app.incubation.selection.require.title.split(' ')[0]}</span>{' '}<span className={pageStyle.keyWhite}>{langText.app.incubation.selection.require.title.split(' ')[1]}</span></p>
                                    }
                                </div>
                            </div>
                            <div className={pageStyle.blackRow}>
                                <div className={pageStyle.keyBox + ' ' + pageStyle.restrictionKey}>
                                    {
                                        language === 'zh_CN' ? <p className={pageStyle.keyStyle}><span className={pageStyle.keyWhite}>{langText.app.incubation.selection.restriction.title.substr(0, 2)}</span><span className={pageStyle.keyPrimary}>{langText.app.incubation.selection.restriction.title.substr(2, 2)}</span></p>
                                            : <p className={pageStyle.keyStyle}><span className={pageStyle.keyPrimary}>{langText.app.incubation.selection.restriction.title.split(' ')[0]}</span>{' '}<span className={pageStyle.keyWhite}>{langText.app.incubation.selection.restriction.title.split(' ')[1]}</span></p>
                                    }
                                </div>
                                <div className={`${pageStyle.textBox} ${pageStyle.restrictionBox}`}>
                                    <div className={pageStyle.triangleLeft}></div>
                                    <img src="/static/images/incubation/restriction_bg.png" alt="" />
                                    {
                                        langText.app.incubation.selection.require.list.map((e, i) => {
                                            return (<p key={i}>{e}</p>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={pageStyle.stepFourContainer}>
                    <div className={pageStyle.stepFourBox}>
                        <p className={pageStyle.stepNumber}>04</p>
                        {
                            language === 'zh_CN' ? <p className={pageStyle.stepTitle}><span className={pageStyle.primary}>{langText.app.incubation.support.title.substr(0, 2)}</span><span className={pageStyle.white}>{langText.app.incubation.support.title.substr(2, 2)}</span></p>
                                : <p className={pageStyle.stepTitle}><span className={pageStyle.primary}>{langText.app.incubation.support.title.split(' ')[0]}</span> <span className={pageStyle.white}>{langText.app.incubation.support.title.split(' ')[1]}</span></p>
                        }
                        <p className={pageStyle.howTextPrimary}>{langText.app.incubation.support.how}</p>
                    </div>
                    <div className={pageStyle.supportImageContainer}>
                        <div className={`${pageStyle.supportImage}`}>
                            {
                                language === 'zh_CN' ? <img src="/static/images/incubation/support_p_zh.png" alt="" className={pageStyle.supportP} /> : <img className={pageStyle.supportP} src="/static/images/incubation/support_p_en.png" alt="" />
                            }
                            {
                                language === 'zh_CN' ? <img src="/static/images/incubation/support_m_zh.png" alt="" className={pageStyle.supportM} /> : <img className={pageStyle.supportM} src="/static/images/incubation/support_m_en.png" alt="" />
                            }
                            <div className={pageStyle.supportImagePadding}></div>
                        </div>
                    </div>
                    <div className={pageStyle.stepFourBox}>
                        <div className={pageStyle.leftBox}>
                            <div className={pageStyle.topBox}>
                                <p className={pageStyle.supportMechanismTitle}>{langText.app.incubation.supportMechanism.title}</p>
                                <p className={pageStyle.supportMechanismDesc}>{langText.app.incubation.supportMechanism.desc}</p>
                            </div>

                            <div className={pageStyle.supportMechanismListBox}>
                                {
                                    langText.app.incubation.supportMechanism.list.map((e, i) => {
                                        return (
                                            <div key={i} className={pageStyle.mechanismItemBox}>
                                                <div className={pageStyle.mechanismItem}>
                                                    <div className={pageStyle.mechanismTitleBox}>
                                                        <p className={pageStyle.mechanismItemTitle}>{e.title}</p>
                                                    </div>
                                                    {
                                                        e.tags.map((ee, j) => {
                                                            return (<p key={j} className={pageStyle.mechanismItemTag}>{ee}</p>)
                                                        })
                                                    }
                                                    <div className={pageStyle.mechanismItemIcon}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={pageStyle.rightBox}>
                            <div className={pageStyle.topBox}>
                                <p className={pageStyle.supportMechanismTitle}>{langText.app.incubation.incentive.title}</p>
                                <p className={pageStyle.supportMechanismDesc}>{langText.app.incubation.incentive.slogan}</p>
                            </div>
                            <div className={pageStyle.incentiveBox}>
                                {
                                    langText.app.incubation.incentive.list.map((e, i) => [
                                        <div key={i} className={pageStyle.incentiveItem}>
                                            <div className={`${pageStyle.incentiveIcon} ${pageStyle['incentiveIcon' + (i + 1)]}`}></div>
                                            <p className={pageStyle.incentiveDesc}>{e}</p>
                                        </div>
                                    ])
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={pageStyle.stepFiveContainer}>
                    <div className={pageStyle.stepFiveBox}>
                        <p className={pageStyle.stepNumber}>05</p>
                        {
                            language === 'zh_CN' ? <p className={pageStyle.stepTitle}><span className={pageStyle.primary}>{langText.app.incubation.incubationProcess.title.substr(0, 2)}</span><span className={pageStyle.black}>{langText.app.incubation.incubationProcess.title.substr(2, 2)}</span></p>
                                : <p className={pageStyle.stepTitle}><span className={pageStyle.primary}>{langText.app.incubation.incubationProcess.title.split(' ')[0]}</span> <span className={pageStyle.black}>{langText.app.incubation.incubationProcess.title.split(' ')[1]}</span></p>
                        }
                        <p className={pageStyle.howTextPrimary}>{langText.app.incubation.incubationProcess.how}</p>
                    </div>
                    <div className={pageStyle.stepFiveBox}>
                        <div className={pageStyle.processImageBox}>
                            <img src="/static/images/incubation/process.png" alt="" />
                            {
                                langText.app.incubation.incubationProcess.stepList.map((e, i) => {
                                    return (
                                        <div key={i} className={`${pageStyle.processItem} ${pageStyle['processItemPosition' + (i + 1)]}`}>
                                            <p className={pageStyle.processItemTitle}>{e.title}</p>
                                            <p className={pageStyle.processItemDesc}>{e.desc || ''}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={publishStyle.bottomJoinContainer}>
                    <div className={publishStyle.bottomJoinBox}>
                        <p className={publishStyle.bottomSlogan}>{langText.app.publishing.bottomSlogan}</p>
                        <p className={publishStyle.bottomSubSlogan}>{langText.app.publishing.bottomSubSlogan}</p>
                        <a href={`/${language}/contact/incubation?from=incubation`} target="_blank" className={publishStyle.bottomContactBtn}>{langText.app.publishing.contactUs}</a>
                    </div>
                </div>
            </div>
        )
    }
}