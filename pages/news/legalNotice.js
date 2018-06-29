import React from 'react'
import I18N from 'I18N'
import Head from 'next/head'
import detailStyle from 'SCSS/news/newsDetail.scss'
import NextRouter from 'next/router'
class LegalNotice extends React.Component {
    componentDidMount() {
        if(this.props.language !== 'zh_CN') {
            NextRouter.push({
                pathname: `/${this.props.language}/languageError`,
                query: {
                    from: encodeURIComponent(this.props.router.asPath)
                }
            })
        }
    }
    render() {
        const { router, language } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={detailStyle.newsDetailPage}>
                <div className={detailStyle.newsContainer}>
                    <div className={detailStyle.newsBox}>
                        <div className={detailStyle.title}>法律声明</div>
                        <div className={detailStyle.info}>
                            <span className={detailStyle.time}>上海炫踪网络股份有限公司法律事务部</span>
                        </div>
                        <div className={detailStyle.content}>
                            <p>炫踪网络对其研发、发行的或与之合作公司共同研发、发行的包括但不限于产品或服务的全部内容及炫踪网络网站上的材料拥有版权等知识产权，受法律保护；炫踪网络或关联公司的注册商标或商标，受法律保护，侵权必究。</p>
                            <p>未经本公司书面许可，任何单位及个人不得以任何方式或理由对上述产品、服务、信息、材料的任何部分进行使用、复制、修改、编纂、传播或与其它产品捆绑使用、销售；未经本公司或商标权人书面许可，任何单位及个人不得以任何方式或理由对该商标的任何部分进行使用、复制、修改、传播、抄录或与其它产品捆绑使用销售。</p>
                            <p>凡侵犯本公司版权、商标权等知识产权的，本公司必依法追究其法律责任。</p>
                            <p>炫踪网络网站域名为<a href="/" target="_blank">http://www.shinezone.com</a>。本公司郑重提醒广大用户，切勿登陆访问仿冒炫踪网络的不法网站，以免上当受害。</p>
                            <p>本公司法律事务部受本公司指示，特此郑重法律声明！</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LegalNotice