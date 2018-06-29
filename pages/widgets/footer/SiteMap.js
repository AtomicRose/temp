import React from 'react'
import { inject, observer } from 'mobx-react'
import siteMapStyle from 'SCSS/footer/siteMap.scss'
import toolStyle from 'SCSS/tool.scss'
import I18N from 'I18N'
import Link from 'next/link'

@inject('rootStore')
@observer
export default class SiteMap extends React.Component {
    handleChangeQRCodeStatus(s) {
        this.props.rootStore.footerStore.setQRCodeStatus(s)
    }
    render() {
        const { language, rootStore, router } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={siteMapStyle.siteMap}>
                <div className={siteMapStyle.container}>
                    <div className={siteMapStyle.mapBox}>
                        <div className={siteMapStyle.mapGroup}>
                            <ul>
                                <li className={siteMapStyle.title}><span>{langText.app.siteMap.about.name}</span></li>
                                <li><span><a href={`/${language}/about`} target="_blank">{langText.app.siteMap.about.aboutUs}</a></span></li>
                                <li><span><a href={`/${language}/achievements`} target="_blank">{langText.app.siteMap.about.accomplishments}</a></span></li>
                                <li><span><a href={`/${language}/join`} target="_blank">{langText.app.siteMap.about.joinUs}</a></span></li>
                                <li><span><a href={`/${language}/contact`} target="_blank">{langText.app.siteMap.about.contactUs}</a></span></li>
                            </ul>
                        </div>
                        <div className={siteMapStyle.mapGroup}>
                            <ul>
                                <li className={siteMapStyle.title}><span>{langText.app.siteMap.support.name}</span></li>
                                <li><span><a href={`/${language}/accountAgreement`} target="_blank">{langText.app.siteMap.support.userAgreements}</a></span></li>
                                <li><span><a href={`/${language}/legalNotice`} target="_blank">{langText.app.siteMap.support.legalNotice}</a></span></li>
                            </ul>
                        </div>
                        <div className={siteMapStyle.mapGroup}>
                            <ul>
                                <li className={siteMapStyle.title}><span>{langText.app.siteMap.otherLink.name}</span></li>
                                <li><span>GAME4US</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className={siteMapStyle.shareBox}>
                        <div className={`${siteMapStyle.shareIcon} ${siteMapStyle.iconWechat}`} onMouseOver={() => this.handleChangeQRCodeStatus(true)} onMouseOut={() => this.handleChangeQRCodeStatus(false)}>
                            <div className={rootStore.footerStore.showQRCode ? `${siteMapStyle.qrCode} ${toolStyle.dBlock}` : siteMapStyle.qrCode}>
                                <img src="/static/images/officialQRCode.png" alt="" />
                            </div>
                        </div>
                        <div className={`${siteMapStyle.shareIcon} ${siteMapStyle.iconSina}`}>
                            <a href="http://weibo.com/2634454531/profile?topnav=1&wvr=6" target="_blank"></a>
                        </div>
                        <div className={`${siteMapStyle.shareIcon} ${siteMapStyle.iconFacebook}`}>
                            <a href="https://www.facebook.com/ShinezoneNetwork/" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}