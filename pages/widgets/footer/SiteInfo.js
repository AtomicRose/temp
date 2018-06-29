import React from 'react'
import siteInfoStyle from 'SCSS/footer/siteInfo.scss'
import I18N from 'I18N'
import Link from 'next/link'

export default class SiteInfo extends React.Component {
    render() {
        const { language, rootStore, router } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={siteInfoStyle.footerInfo}>
                <div className={siteInfoStyle.container}>
                    <div className={siteInfoStyle.logo}>
                        <img src="/static/images/logo_en.png" alt="" />
                    </div>
                    <div className={siteInfoStyle.slogan}>{langText.app.siteInfo.slogan}</div>
                    <div className={siteInfoStyle.flex}>
                        <div className={siteInfoStyle.info}>
                            <p>炫踪网络股份有限公司 版权所有</p>
                            <p>Copyright ©2017 Shinezone. All Rights Reserved.</p>
                            <p>沪网文[2016]3410-250号 <a href="http://www.miitbeian.gov.cn" target="_blank">沪ICP备15034524号</a> </p>
                            {/* <p>隐私条款 法律声明 家长监控</p> */}
                            <p>{langText.app.siteInfo.address}</p>
                            <p><span className={siteInfoStyle.police}></span>沪公网安备 31011502007187号</p>
                        </div>
                        <div className={siteInfoStyle.join}>
                            <div className={siteInfoStyle.joinGroup}>
                                <div className={`${siteInfoStyle.joinItem} ${siteInfoStyle.selfSave}`}><a href={`/${language}/regulationConvention`} target="_blank">上海市网络游戏行业自律公约</a></div>
                            </div>
                            <div className={siteInfoStyle.joinGroup}>
                                <div className={`${siteInfoStyle.joinItem} ${siteInfoStyle.netSave}`}>
                                    <a href="http://sq.ccm.gov.cn/ccnt/sczr/login" target="_blank">互联网文化与经营单位</a>
                                </div>
                                <div className={`${siteInfoStyle.joinItem} ${siteInfoStyle.childSave}`}><a href={`/${language}/childProtection`} target="_blank">未成年人家长监护工程</a></div>
                            </div>
                        </div>
                        <div className={siteInfoStyle.joinMobile}>
                            <div className={siteInfoStyle.joinGroup}>
                                <div className={`${siteInfoStyle.joinItem} ${siteInfoStyle.netSave}`}><a href="http://sq.ccm.gov.cn/ccnt/sczr/login" target="_blank">互联网文化与经营单位</a></div>
                                <div className={`${siteInfoStyle.joinItem} ${siteInfoStyle.childSave}`}><a href={`/${language}/childProtection`} target="_blank">未成年人家长监护工程</a></div>
                            </div>
                            <div className={siteInfoStyle.joinGroup}>
                                <div className={`${siteInfoStyle.joinItem} ${siteInfoStyle.selfSave}`}><a href={`/${language}/regulationConvention`} target="_blank">上海市网络游戏行业自律公约</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}