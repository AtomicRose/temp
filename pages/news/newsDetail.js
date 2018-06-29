import React from 'react'
import I18N from 'I18N'
import Head from 'next/head'
import detailStyle from 'SCSS/news/newsDetail.scss'
import Share from 'UTILS/share'
import hosts from 'CONFIG/hosts'
import TimeFormat from 'UTILS/timeFormat'
import { inject, observer } from 'mobx-react';
@inject('rootStore')
@observer
class NewsDetail extends React.Component {
    componentWillMount() {
        this.props.rootStore.newsStore.getNewsDetail({
            timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
            languageType: this.props.language === 'en_US' ? 2 : 1,
            newsId: parseInt(this.props.router.query.newsId, 10)
        })
    }
    render() {
        const {router, language, rootStore} = this.props
        const langText = I18N.langText(language)
        const newsDetail = rootStore.newsStore.newsDetail
        const shareInfo = Share({
            title: newsDetail.title || langText.seo.news.title,
            siteName: langText.seo.news.title, // 这里取的是新闻站点
            description: newsDetail.newsAbstract || '',
            imageUrl: newsDetail.titlePicUrl || '', // 这里可以替换成新闻内容图片
            from: 'officialSite', // 分享自官网
            url: `${hosts.domain}${router.asPath}`,
            weiboAppKey: '',
            facebookAppId: '',
            twitterCreator: 'Shinezone',
            domain: `${hosts.domain}`
        })
        let facebookHeads = []
        let twitterHeads = []
        if(shareInfo.facebook.head.length) {
            for(let i = 0; i < shareInfo.facebook.head.length; i++) {
                let e = shareInfo.facebook.head[i]
                facebookHeads.push(<meta key={i} property={e.property} content={e.content}/>)
            }
        }
       if(shareInfo.twitter.head.length) {
            for(let i = 0; i < shareInfo.twitter.head.length; i++) {
                let e = shareInfo.twitter.head[i]
                twitterHeads.push(<meta key={i} name={e.name} content={e.content}/>)
            }
        }
        return (
            <div className={detailStyle.newsDetailPage}>
                {/* about the Head, we need request the news detail */}
                {/* TODO the new editor should add the keywords input */}
                <Head>
                    <title>{newsDetail.title || langText.seo.news.title}</title>
                    <meta name="description" content={newsDetail.newsAbstract || langText.seo.news.description} />
                    <meta name="keywords" content={langText.seo.news.keywords} />
                    {facebookHeads}
                    {twitterHeads}
                </Head>
                <div className={detailStyle.newsContainer}>
                    {newsDetail && newsDetail.newsId !== undefined && <div className={detailStyle.newsBox}>
                        <div className={detailStyle.bread}>
                            <span><a href={`/${language}/news`}>{langText.app.news.news}</a></span>
                            <span>/</span>
                            <span>{langText.app.news.newsDetail}</span>
                        </div>
                        <div className={detailStyle.title}>{newsDetail.title || ''}</div>
                        <div className={detailStyle.info}>
                            <span className={detailStyle.from}>{`${langText.app.news.source}:${newsDetail.source || ''}`}</span>
                            <span className={detailStyle.time}>{TimeFormat(newsDetail.publishTime, 'YYYY/MM/DD hh:mm')}</span>
                        </div>
                        <div className={detailStyle.content}>
                            {newsDetail.content || ''}
                        </div>
                        <div className={detailStyle.operate}>
                            <div className={detailStyle.shareBox}>
                                <a href="" target="_blank" className={detailStyle.shareIcon + ' ' + detailStyle.shareWechat}></a>
                                <a href={shareInfo.weibo.href} target="_blank" className={detailStyle.shareIcon + ' ' + detailStyle.shareWeibo}></a>
                                <a href={shareInfo.facebook.href} target="_blank" className={detailStyle.shareIcon + ' ' + detailStyle.shareFacebook}></a>
                                <a href={shareInfo.twitter.href} target="_blank" className={detailStyle.shareIcon + ' ' + detailStyle.shareTwitter}></a>
                            </div>
                            <div className={detailStyle.continueBox}>
                                <span className={detailStyle.prev}><a href={`/${language}/news`}>{langText.app.news.prev}</a></span>
                                <span className={detailStyle.next}><a href={`/${language}/news`}>{langText.app.news.next}</a></span>
                            </div>
                        </div>
                    </div>}
                    <div className={detailStyle.newsBox}>
                        <div className={detailStyle.languageError} style={{display: (newsDetail && newsDetail.newsId ? 'none' : 'block')}}>
                            <img src="/static/images/language_error.png" className={detailStyle.languageErrorImg} alt=""/>
                            <p className={detailStyle.languageTip}>{langText.app.news.languageNotSupport}</p>
                            <p className={detailStyle.seeOtherLanguage}><span>See the Chinese version</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsDetail