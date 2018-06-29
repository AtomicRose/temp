import React from 'react'
import homeStyle from 'SCSS/home/home.scss'
import Link from 'next/link'
import I18N from 'I18N'
import HomeSlider from 'COMPONENTS/HomeSlider'
import Head from 'next/head'
import { inject, observer } from 'mobx-react';
@inject('rootStore')
@observer
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderContent: (<ul>
                <li>
                    <div className={homeStyle.partnerItem}>
                        <img src="/static/images/partner01.png" alt="" />
                    </div>
                    <div className={homeStyle.partnerItem}>
                        <img src="/static/images/partner02.png" alt="" />
                    </div>
                    <div className={homeStyle.partnerItem}>
                        <img src="/static/images/partner03.png" alt="" />
                    </div>
                    <div className={homeStyle.partnerItem}>
                        <img src="/static/images/partner04.png" alt="" />
                    </div>
                    <div className={homeStyle.partnerItem}>
                        <img src="/static/images/partner05.png" alt="" />
                    </div>
                </li>
                <li>
                    <div className={homeStyle.partnerItem} style={{ marginLeft: '10%' }}>
                        <img src="/static/images/partner06.png" alt="" />
                    </div>
                    <div className={homeStyle.partnerItem}>
                        <img src="/static/images/partner07.png" alt="" />
                    </div>
                    <div className={homeStyle.partnerItem}>
                        <img src="/static/images/partner08.png" alt="" />
                    </div>
                    <div className={homeStyle.partnerItem}>
                        <img src="/static/images/partner09.png" alt="" />
                    </div>
                </li>
            </ul>)
        }
    }
    handleScrollDown() {
        // window.scrollTo(0, window.innerHeight)
        window.animateScrollTo(window.innerHeight)
      
    }
    componentWillMount() {
        this.props.rootStore.homeStore.getGameList({
            timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
            languageType: this.props.language === 'en_US' ? 2 : 1
        })
    }
    componentDidMount() {
        function reset() {
            if (window && document && (window.innerWidth / window.innerHeight) < (1280 / 694)) {
                let officialVideo = document.getElementById('officialVideo');
                if (!officialVideo) {
                    return false;
                }
                officialVideo.style.height = '100%';
                officialVideo.style.width = 'auto';
                let hotGameContainer = document.getElementById('hotGameContainer')
                let hotGameShow = document.getElementById('hotGameShow')
                if (hotGameContainer && hotGameShow) {
                    hotGameContainer.style.height = (hotGameShow.clientHeight - (window.innerWidth <= 768 ? 100 : 200)) + 'px'
                }
                window.onresize = function () {
                    if (window && document && (window.innerWidth / window.innerHeight) < (1280 / 694)) {
                        let officialVideo = document.getElementById('officialVideo');
                        if (!officialVideo) {
                            return false;
                        }
                        let hotGameContainer = document.getElementById('hotGameContainer')
                        let hotGameShow = document.getElementById('hotGameShow')
                        if (hotGameContainer && hotGameShow) {
                            hotGameContainer.style.height = (hotGameShow.clientHeight - (window.innerWidth <= 768 ? 100 : 200)) + 'px'
                        }
                    }
                }
            }
        }
        window.onload = () => {
            reset()
        }
        if (window.innerWidth <= 768) {
            this.setState({
                sliderContent: (<ul>
                    <li>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner01.png" alt="" />
                        </div>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner02.png" alt="" />
                        </div>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner03.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner04.png" alt="" />
                        </div>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner05.png" alt="" />
                        </div>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner06.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner07.png" alt="" />
                        </div>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner08.png" alt="" />
                        </div>
                        <div className={homeStyle.partnerItem}>
                            <img src="/static/images/partner09.png" alt="" />
                        </div>
                    </li>
                </ul>)
            })
        }
    }
    render() {
        const { language, rootStore } = this.props
        const langText = I18N.langText(language)
        const games = {
            en: {
                name: 'FLOWER SHOP',
                type: 'Simulation',
                desc: 'Flower Shop is our first independently developed star product, themed after a flower store. The game uses a fresh Japanese art style, and centers around the running of your very own store. The narrator, Vivian, leads the player step-by-step through the gameplay, providing a relaxing, social gaming experience.',
                logo: '/static/images/temp_logo.png',
                img: ['/static/images/temp_1.png', '/static/images/temp_2.png']
            },
            zh: {
                name: '花店物语',
                type: '模拟经营',
                desc: '花店物语(Flower Shop)是自主研发的首款以鲜花店铺为主题的明星产品。游戏采用日式清新画风，以经营花店为核心，由故事人物Vivian带领玩家，逐步呈现一个游戏玩法丰富齐全的模拟经营游戏，给玩家全方位的休闲社交体验。',
                logo: '/static/images/temp_logo.png',
                img: ['/static/images/temp_1.png', '/static/images/temp_2.png']
            }
        }
        const gameInfo = language === 'en_US' ? games.en : games.zh
        const gameList = rootStore.homeStore.gameList || []
        return (
            <div className={homeStyle.homePage}>
                <Head>
                    <title>{langText.seo.home.title}</title>
                    <meta name="description" content={langText.seo.home.description} />
                    <meta name="keywords" content={langText.seo.home.keywords} />
                    <script src="/static/animationScroll.js"></script>
                </Head>
                <div className={homeStyle.videoContainer}>
                    <video id="officialVideo" src="/static/videos/official.mp4" loop autoPlay muted></video>
                </div>
                <div className={homeStyle.contentContainer}>
                    <div className={homeStyle.officialPlayContainer}>
                        <div className={homeStyle.middle}>
                            <div className={homeStyle.middleBox}>
                                <div className={homeStyle.company}>
                                    <span className={homeStyle.name}>{langText.app.siteInfo.companyName.toUpperCase()}</span>
                                    <span className={homeStyle.slogan}>{langText.app.siteInfo.slogan}</span>
                                </div>
                                <div className={homeStyle.controller}>
                                    <a href={`/${language}/contact`} target="_blank"><span className={homeStyle.contactBtn}>{langText.app.siteMap.about.contactUs.toUpperCase()}</span></a>
                                    <a href="/static/videos/official-full.mp4" target="_blank"><span className={homeStyle.playBtn}></span></a>
                                </div>
                            </div>
                        </div>
                        <div className={homeStyle.scrollPage} onClick={() => this.handleScrollDown()}>
                            <p>{langText.app.home.scrollDown}</p>
                            <span className={homeStyle.scrollIcon}></span>
                        </div>
                    </div>
                    <div className={homeStyle.descContainer}>
                        <div className={homeStyle.descBox}>
                            <p className={homeStyle.descTitle}>{langText.app.home.descTitle}</p>
                            <p className={homeStyle.desc}>{langText.app.home.description}</p>
                        </div>
                    </div>
                    <div className={homeStyle.supportContainer}>
                        <div className={homeStyle.supportBox}>
                            <div className={homeStyle.supportItem}>
                                <span className={`${homeStyle.supportIcon} ${homeStyle.iconPublishing}`}></span>
                                <p className={homeStyle.supportTitle}>{langText.app.home.gamePublishingName}</p>
                                <hr className={homeStyle.line} />
                                <p className={homeStyle.supportDesc}>{langText.app.home.gamePublishingDesc}</p>
                                <a href={`/${language}/publish`} target="__blank"><div className={homeStyle.jumpBtn}></div></a>
                            </div>
                            <div className={homeStyle.supportItem}>
                                <span className={`${homeStyle.supportIcon} ${homeStyle.iconIncubation}`}></span>
                                <p className={homeStyle.supportTitle}>{langText.app.home.gameIncubationName}</p>
                                <hr className={homeStyle.line} />
                                <p className={homeStyle.supportDesc}>{langText.app.home.gameIncubationDesc}</p>
                                <a href={`/${language}/incubator`} target="__blank"><div className={homeStyle.jumpBtn}></div></a>
                            </div>
                            <div className={homeStyle.supportItem}>
                                <span className={`${homeStyle.supportIcon} ${homeStyle.iconInvestment}`}></span>
                                <p className={homeStyle.supportTitle}>{langText.app.home.gameInvestmentName}</p>
                                <hr className={homeStyle.line} />
                                <p className={homeStyle.supportDesc}>{langText.app.home.gameInvestmentDesc}</p>
                                {/* <div className={homeStyle.jumpBtn}></div> */}
                            </div>
                        </div>
                    </div>
                    <div className={homeStyle.advantageContainer}>
                        <div className={homeStyle.advantageBox}>
                            <p className={homeStyle.advantageTitle}>{langText.app.home.advantage}</p>
                            <div className={homeStyle.advantageItem}>
                                <span className={`${homeStyle.advantageIcon} ${homeStyle.iconRegions}`}></span>
                                <p className={homeStyle.number}>20+</p>
                                <p className={homeStyle.type}>{langText.app.home.advantageRegions}</p>
                            </div>
                            <div className={homeStyle.advantageItem2}>
                                <span className={`${homeStyle.advantageIcon} ${homeStyle.iconPlayers}`}></span>
                                <p className={homeStyle.number}>200,000,000+</p>
                                <p className={homeStyle.type}>{langText.app.home.advantagePlayers}</p>
                            </div>
                            <div className={homeStyle.advantageItem3}>
                                <span className={`${homeStyle.advantageIcon} ${homeStyle.iconGames}`}></span>
                                <p className={homeStyle.number}>30+</p>
                                <p className={homeStyle.type}>{langText.app.home.advantageGames}</p>
                            </div>
                        </div>
                    </div>
                    <div className={homeStyle.gamesContainer} id="hotGameContainer">
                        <div className={homeStyle.gamesBox}>
                            <div className={homeStyle.gameShow} id="hotGameShow">
                                {
                                    gameList.map((e, i) => {
                                        let imgs = ['', '']
                                        try {
                                            imgs = JSON.parse(e.picUrls)
                                        } catch (error) {
                                            console.log(error)
                                        }
                                        return (
                                            <div key={i} className={homeStyle.gameItem}>
                                                <a href={e.jumpUrl} target="_blank"><div className={homeStyle.contentBg}>
                                                    <div className={homeStyle.logo}>
                                                        <img src={e.logoUrl} alt={e.name} />
                                                    </div>
                                                    <div className={homeStyle.name}>{e.name}</div>
                                                    <div className={homeStyle.type}>{e.gameType}</div>
                                                    <textarea readOnly="readonly" rows="4" className={homeStyle.desc} defaultValue={e.description}></textarea>
                                                    <div className={homeStyle.desc2}>{e.description}</div>
                                                    <div className={homeStyle.screenshots}>
                                                        <div className={homeStyle.imgBox}>
                                                            <img src={imgs[0]} alt="" />
                                                        </div>
                                                        <div className={homeStyle.imgBox}>
                                                            <img src={imgs[1]} alt="" />
                                                        </div>
                                                    </div>
                                                </div></a>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className={homeStyle.partnerContainer}>
                        <div className={homeStyle.partnerBox}>
                            <p className={homeStyle.partnerTitle}>{langText.app.home.partner}</p>
                            <div className={homeStyle.homeSilder}>
                                <HomeSlider>
                                    {this.state.sliderContent}
                                </HomeSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index