import React from 'react'
import aboutStyle from 'SCSS/about/about.scss'
import pageStyle from 'SCSS/about/contact.scss'
import ColorBar from './bar'
import AboutNav from './nav'
import I18N from 'I18N'
import Head from 'next/head'
class AboutUs extends React.Component {
    componentDidMount() {
        const { language } = this.props
        const langText = I18N.langText(language)
        let BMap = window.BMap
        var map = new BMap.Map("l-map")
        map.enableScrollWheelZoom(true);
        map.addControl(new BMap.MapTypeControl({
            mapTypes: [
                window.BMAP_NORMAL_MAP,
                window.BMAP_HYBRID_MAP
            ]
        }));
        var point = new BMap.Point(121.492876, 31.187106)
        var top_left_control = new BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_LEFT }) // 左上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl() // 左上角，添加默认缩放平移控件
        map.addControl(top_left_control)
        map.addControl(top_left_navigation)
        var marker = new BMap.Marker(point) // 创建标注
        map.addOverlay(marker) // 将标注添加到地图中
        marker.setAnimation(window.BMAP_ANIMATION_BOUNCE) // 跳动的动画
        map.centerAndZoom(point, 17)
        var opts = {
            width: 100, // 信息窗口宽度
            height: 100, // 信息窗口高度
            title: langText.app.siteInfo.companyName, // 信息窗口标题
            enableMessage: true // 设置允许信息窗发送短息
        }
        var infoWindow = new BMap.InfoWindow(langText.app.siteInfo.address, opts) // 创建信息窗口对象 
        marker.addEventListener("click", function () {
            map.openInfoWindow(infoWindow, point) // 开启信息窗口
        });
    }
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={aboutStyle.aboutPage}>
                <Head>
                    <script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=RAcvpKGRhGN5ye18GGx8cYCetSGMptNg"></script>
                </Head>
                <ColorBar language={this.props.language} router={this.props.router} />
                <AboutNav language={this.props.language} router={this.props.router} />
                <div className={pageStyle.pageContainer}>
                    <div className={pageStyle.pageBox}>
                        <div className={pageStyle.mapBox}>
                            <div style={{ width: '100%', height: '100%' }} id="l-map"></div>
                        </div>
                        <div className={pageStyle.contactInfo}>
                            <div className={pageStyle.contentBox}>
                                <p className={pageStyle.title}>{langText.app.contact.pageTitle}</p>
                                <p className={pageStyle.name}>{langText.app.contact.company}</p>
                                <p className={pageStyle.address}><b>{langText.app.contact.addressTitle}:</b>{langText.app.contact.address}</p>
                                <p className={pageStyle.postcode}><b>{langText.app.contact.postcodeTitle}:</b>{langText.app.contact.postcode}</p>
                                <p className={pageStyle.telephone}><b>{langText.app.contact.telephoneTitle}:</b>{langText.app.contact.telephone}</p>
                            </div>
                            <hr />
                            <div className={pageStyle.contentBox}>
                                <div className={pageStyle.contactItem}>
                                    <p className={pageStyle.contactTitle}>{langText.app.contact.inbucation}</p>
                                    <p className={pageStyle.email}>Email:incubation@shinezone.com</p>
                                    <a href={`/${language}/contact/incubation?from=incubation`} target="_blank" className={pageStyle.jumpBtn}></a>
                                </div>
                                <div className={pageStyle.contactItem}>
                                    <p className={pageStyle.contactTitle}>{langText.app.contact.publishing}</p>
                                    <p className={pageStyle.email}>Email: publisher@shinezone.com</p>
                                    <a href={`/${language}/contact/information?from=publishing`} target="_blank" className={pageStyle.jumpBtn}></a>
                                </div>
                                <div className={`${pageStyle.contactItem} ${pageStyle.contactItemMargin}`}>
                                    <p className={pageStyle.contactTitle}>{langText.app.contact.pr}</p>
                                    <p className={pageStyle.email}>Email: PR@shinezone.com</p>
                                    <a href={`/${language}/contact/information?from=pr`} target="_blank" className={pageStyle.jumpBtn}></a>
                                </div>
                                <div className={`${pageStyle.contactItem} ${pageStyle.contactItemMargin}`}>
                                    <p className={pageStyle.contactTitle}>{langText.app.contact.hr}</p>
                                    <p className={pageStyle.email}>Email: HR@shinezone.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs