import React from 'react'
import aboutStyle from 'SCSS/about/about.scss'
import usStyle from 'SCSS/about/us.scss'
import ColorBar from './bar'
import AboutNav from './nav'
import I18N from 'I18N'
class AboutUs extends React.Component {
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={aboutStyle.aboutPage}>
                <ColorBar language={this.props.language} router={this.props.router} />
                <AboutNav language={this.props.language} router={this.props.router} />
                <div className={usStyle.aboutContainer}>
                    <div className={usStyle.aboutBox}>
                        <p className={usStyle.aboutTitle}>{langText.app.home.descTitle}</p>
                        <p className={usStyle.aboutText}>{langText.app.home.description}</p>
                    </div>
                </div>
                <div className={usStyle.imgWallContainer}>
                    <div className={usStyle.imgWallTopBg}></div>
                    <div className={usStyle.imgWallBottomBg}></div>
                    <div className={usStyle.imgWallMax}>
                        <div className={usStyle.imgWallPadding}></div>
                        <div className={usStyle.imgWallBox_p}>
                            <div className={usStyle.pbox}>
                                <div className={usStyle.r1}>
                                    <div className={usStyle.r1_c1}>
                                        <div className={usStyle.wall_smallBox}>
                                            <div className={`${usStyle.wall_smallBox_p} ${usStyle.wall_goal_p}`}></div>
                                            <div className={`${usStyle.wall_smallBox_c}`}>
                                                <div className={usStyle.mid}>
                                                    <p>{langText.app.about.goal.name}</p>
                                                    <p>{langText.app.about.goal.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={usStyle.wall_smallBox}>
                                            <div className={`${usStyle.wall_smallBox_p} ${usStyle.wall_attitude_p}`}></div>
                                            <div className={`${usStyle.wall_smallBox_c}`}>
                                                <div className={usStyle.mid}>
                                                    <p>{langText.app.about.attitude.name}</p>
                                                    <p>{langText.app.about.attitude.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={usStyle.r1_c2}>
                                        <div className={usStyle.wall_office}>
                                            <div className={usStyle.wall_office_p}></div>
                                            <div className={usStyle.wall_office_c}></div>
                                        </div>
                                    </div>
                                    <div className={usStyle.r1_c3}>
                                        <div className={usStyle.wall_smallBox}>
                                            <div className={`${usStyle.wall_smallBox_p} ${usStyle.wall_vision_p}`}></div>
                                            <div className={`${usStyle.wall_smallBox_c}`}>
                                                <div className={usStyle.mid}>
                                                    <p>{langText.app.about.vision.name}</p>
                                                    <p>{langText.app.about.vision.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={usStyle.wall_smallBox}>
                                            <div className={`${usStyle.wall_smallBox_p} ${usStyle.wall_white1_p}`}></div>
                                            <div className={`${usStyle.wall_smallBox_c}`}>
                                                <div className={usStyle.mid}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={usStyle.r2}>
                                    <div className={usStyle.r2_c1}>
                                        <div className={usStyle.r2_c1_r1}>
                                            <div className={usStyle.r2_c1_r1_c1}>
                                                <div className={usStyle.wall_smallBox}>
                                                    <div className={`${usStyle.wall_smallBox_p2} ${usStyle.wall_white2_p}`}></div>
                                                    <div className={`${usStyle.wall_smallBox_c}`}>
                                                        <div className={usStyle.mid}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={usStyle.r2_c1_r1_c2}>
                                                <div className={usStyle.wall_smallBox}>
                                                    <div className={`${usStyle.wall_smallBox_p3} ${usStyle.wall_about_p}`}></div>
                                                    <div className={`${usStyle.wall_smallBox_c}`}>
                                                        <div className={usStyle.mid}>
                                                            <p className={usStyle.boxTitle} style={{display: 'block', fontWeight: 'bold'}}>{langText.app.about.about.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={usStyle.r2_c1_r2}>
                                            <div className={usStyle.wall_smallBox}>
                                                <div className={`${usStyle.wall_smallBox_p4} ${usStyle.wall_strategy_p}`}></div>
                                                <div className={`${usStyle.wall_smallBox_c}`}>
                                                    <div className={usStyle.specialText}>
                                                        <p>{langText.app.about.strategy.name}</p>
                                                        <p>{langText.app.about.strategy.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={usStyle.r2_c2}>
                                        <div className={usStyle.r2_c2_r1}>
                                            <div className={usStyle.wall_smallBox}>
                                                <div className={`${usStyle.wall_smallBox_p4} ${usStyle.wall_speech_p}`}></div>
                                                <div className={`${usStyle.wall_smallBox_c}`}></div>
                                            </div>
                                        </div>
                                        <div className={usStyle.r2_c2_r2}>
                                            <div className={usStyle.r2_c2_r2_c1}>
                                                <div className={usStyle.wall_smallBox}>
                                                    <div className={`${usStyle.wall_smallBox_p5} ${usStyle.wall_mission_p}`}></div>
                                                    <div className={`${usStyle.wall_smallBox_c}`}>
                                                        <div className={usStyle.mid}>
                                                            <p>{langText.app.about.mission.name}</p>
                                                            <p>{langText.app.about.mission.text}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={usStyle.r2_c2_r2_c2}>
                                                <div className={usStyle.wall_smallBox}>
                                                    <div className={`${usStyle.wall_smallBox_p6} ${usStyle.wall_coreValue_p}`}></div>
                                                    <div className={`${usStyle.wall_smallBox_c}`}>
                                                        <div className={usStyle.mid}>
                                                            <p>{langText.app.about.coreValue.name}</p>
                                                            <p>{langText.app.about.coreValue.text}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={usStyle.imgWallBox_m}>
                            <div className={usStyle.mRow}>
                                <div className={usStyle.mBox1}>
                                    <div className={usStyle.wall_smallBox}>
                                        <div className={`${usStyle.wall_smallBox_p} ${usStyle.wall_goal_p}`}></div>
                                        <div className={`${usStyle.wall_smallBox_c}`}>
                                            <div className={usStyle.mid}>
                                                <p>{langText.app.about.goal.name}</p>
                                                <p>{langText.app.about.goal.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={usStyle.mBox2}>
                                    <div className={usStyle.wall_smallBox}>
                                        <div className={`${usStyle.wall_smallBox_p2} ${usStyle.wall_attitude_p}`}></div>
                                        <div className={`${usStyle.wall_smallBox_c}`}>
                                            <div className={usStyle.mid}>
                                                <p>{langText.app.about.attitude.name}</p>
                                                <p>{langText.app.about.attitude.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usStyle.mRow}>
                                <div className={usStyle.wall_office}>
                                    <div className={usStyle.wall_office_p}></div>
                                    <div className={usStyle.wall_office_c}></div>
                                </div>
                            </div>
                            <div className={usStyle.mRow}>
                                <div className={usStyle.mBox1}>
                                    <div className={usStyle.wall_smallBox}>
                                        <div className={`${usStyle.wall_smallBox_p} ${usStyle.wall_vision_p}`}></div>
                                        <div className={`${usStyle.wall_smallBox_c}`}>
                                            <div className={usStyle.mid}>
                                                <p>{langText.app.about.vision.name}</p>
                                                <p>{langText.app.about.vision.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={usStyle.mBox2}>
                                    <div className={usStyle.wall_smallBox}>
                                        <div className={`${usStyle.wall_smallBox_p2} ${usStyle.wall_white1_p}`}></div>
                                        <div className={`${usStyle.wall_smallBox_c}`}>
                                            <div className={usStyle.mid}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usStyle.mRow}>
                                <div className={usStyle.wall_smallBox}>
                                    <div className={`${usStyle.wall_smallBox_p4} ${usStyle.wall_speech_p}`}></div>
                                    <div className={`${usStyle.wall_smallBox_c}`}></div>
                                </div>
                            </div>
                            <div className={usStyle.mRow}>
                                <div className={usStyle.mBox2}>
                                    <div className={usStyle.wall_smallBox}>
                                        <div className={`${usStyle.wall_smallBox_p2} ${usStyle.wall_white2_p}`}></div>
                                        <div className={`${usStyle.wall_smallBox_c}`}>
                                            <div className={usStyle.mid}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={usStyle.mBox1}>
                                    <div className={usStyle.wall_smallBox}>
                                        <div className={`${usStyle.wall_smallBox_p} ${usStyle.wall_about_p}`}></div>
                                        <div className={`${usStyle.wall_smallBox_c}`}>
                                            <div className={usStyle.mid}>
                                                <p className={usStyle.boxTitle}>{langText.app.about.about.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usStyle.mRow}>
                                <div className={usStyle.wall_smallBox}>
                                    <div className={`${usStyle.wall_smallBox_p4} ${usStyle.wall_strategy_p}`}></div>
                                    <div className={`${usStyle.wall_smallBox_c}`}>
                                        <div className={usStyle.specialText}>
                                            <p>{langText.app.about.strategy.name}</p>
                                            <p>{langText.app.about.strategy.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usStyle.mRow}>
                                <div className={usStyle.mBox1}>
                                    <div className={usStyle.wall_smallBox}>
                                        <div className={`${usStyle.wall_smallBox_p} ${usStyle.wall_mission_p}`}></div>
                                        <div className={`${usStyle.wall_smallBox_c}`}>
                                            <div className={usStyle.mid}>
                                                <p>{langText.app.about.mission.name}</p>
                                                <p>{langText.app.about.mission.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={usStyle.mBox2}>

                                    <div className={usStyle.wall_smallBox}>
                                        <div className={`${usStyle.wall_smallBox_p2} ${usStyle.wall_coreValue_p}`}></div>
                                        <div className={`${usStyle.wall_smallBox_c}`}>
                                            <div className={usStyle.mid}>
                                                <p>{langText.app.about.coreValue.name}</p>
                                                <p>{langText.app.about.coreValue.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={usStyle.partners}>
                    <p className={usStyle.partnersTitle}>{langText.app.about.partners.title}</p>
                    <p className={usStyle.partnersDesc}>{langText.app.about.partners.desc}</p>
                    <div className={usStyle.iconBox}>
                        <div className={usStyle.iconBg}>
                            <div className={usStyle.iconItem}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon1}`}></div>
                            </div>
                            <div className={usStyle.iconItem}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon2}`}></div>
                            </div>
                            <div className={usStyle.iconItem}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon3}`}></div>
                            </div>
                            <div className={usStyle.partnerLineM}>
                                <hr />
                            </div>
                            <div className={usStyle.iconItem}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon4}`}></div>
                            </div>
                            <div className={usStyle.iconItem}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon5}`}></div>
                            </div>
                            <div className={usStyle.partnerLineP}>
                                <hr/>
                            </div>
                            <div className={usStyle.iconItem}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon6}`}></div>
                            </div>
                            <div className={usStyle.partnerLineM}>
                                <hr />
                            </div>
                            <div className={usStyle.iconItem}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon7}`}></div>
                            </div>
                            <div className={`${usStyle.iconItem} ${usStyle.iconItem_2}`}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon8}`}></div>
                            </div>
                            <div className={usStyle.partnerLineM}>
                                <hr />
                            </div>
                            <div className={`${usStyle.iconItem} ${usStyle.iconItem_2}`}>
                                <div className={usStyle.iconPadding}></div>
                                <div className={`${usStyle.iconBase} ${usStyle.icon9}`}></div>
                            </div>
                            <div className={usStyle.iconItem}>
                                <p>{langText.app.about.partners.more}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs