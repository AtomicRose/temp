import React from 'react'
import newsPageStyle from 'SCSS/news/newsPage.scss'
import NewsSlider from 'COMPONENTS/NewsSlider'
import Pagination from 'COMPONENTS/Pagination'
import dynamic from 'next/dynamic'
import NewsLoading from 'COMPONENTS/NewsLoading'
import Head from 'next/head'
import I18N from 'I18N'
import TimeFormat from 'UTILS/timeFormat'
import { inject, observer } from 'mobx-react';
@inject('rootStore')
@observer
export default class NewsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1
        }
    }
    componentWillMount() {
        this.props.rootStore.newsStore.getNewsShufflingList({
            timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
            languageType: this.props.language === 'en_US' ? 2 : 1
        })
        this.props.rootStore.newsStore.getNewsTopList({
            timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
            languageType: this.props.language === 'en_US' ? 2 : 1
        })
        this.getNewsList({
            currentPage: this.props.rootStore.newsStore.currentPage
        })
    }
    getNewsList(p) {
        let params = {
           timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
           languageType: this.props.language === 'en_US' ? 2 : 1,
           start: (p.currentPage - 1) * this.props.rootStore.newsStore.pageSize,
           limit: this.props.rootStore.newsStore.pageSize,
           state: 2
        }
        this.props.rootStore.newsStore.getNewsList(params)
    }
    handlePageChanged(page) {
        this.props.rootStore.newsStore.setCurrentPage(page)
        this.getNewsList({
            currentPage: page
        })
    }
    render() {
        const { language, rootStore } = this.props
        const langText = I18N.langText(language)
        const topNews = rootStore.newsStore.newsTopList.length > 0 ? rootStore.newsStore.newsTopList[0] : null
        return (
            <div className={newsPageStyle.newsPage}>
                <Head>
                    <title>{langText.seo.news.title}</title>
                    <meta name="description" content={langText.seo.news.description} />
                    <meta name="keywords" content={langText.seo.news.keywords} />
                </Head>
                <div className={newsPageStyle.listContainer}>
                    <div className={newsPageStyle.topFlex}>
                        <div className={newsPageStyle.slider}>
                            <div className={newsPageStyle.sliderBox}>
                                <div className={newsPageStyle.newsSlider}>
                                    {rootStore.newsStore.newsShufflingList.length > 0 && <NewsSlider>
                                        <ul>
                                            {
                                                rootStore.newsStore.newsShufflingList.map((e, i)=>{
                                                    return (
                                                        <li key={i}>
                                                            <div className={newsPageStyle.newsSliderItem}>
                                                                <a href={`/${language}/news/${e.newsId}`} target="_blank">
                                                                    <img src={e.titlePicUrl} alt="" />
                                                                    <div className={newsPageStyle.sliderTitle}>
                                                                        <span>{e.title}</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </NewsSlider>}
                                </div>
                            </div>
                        </div>
                        <div className={newsPageStyle.topNews}>
                            {topNews && <div className={newsPageStyle.topNewsContainer}>
                                <div className={newsPageStyle.topNewsPicture}>
                                    <div className={newsPageStyle.topNewsPictureHeight}>
                                        <div className={newsPageStyle.topNewsPictureContainer}>
                                            <a href={`/${language}/news/${topNews.newsId}`} target="_blank"><img src={topNews.titlePicUrl} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <a href={`/${language}/news/${topNews.newsId}`} target="_blank"><textarea className={newsPageStyle.topNewsTitle} rows="2" defaultValue={topNews.title}></textarea></a>
                                <a href={`/${language}/news/${topNews.newsId}`} target="_blank"><textarea className={newsPageStyle.topNewsTitle_m} rows="1" defaultValue={topNews.title}></textarea></a>
                                <a href={`/${language}/news/${topNews.newsId}`} target="_blank"><textarea className={newsPageStyle.topNewsDesc} rows="2" defaultValue={topNews.newsAbstract}></textarea></a>
                                <p><span className={newsPageStyle.topNewsFrom}>{`${langText.app.news.source}:${topNews.source}`}</span><span className={newsPageStyle.topNewsTime}>{TimeFormat(topNews.publishTime, 'YYYY/MM/DD hh:mm')}</span></p>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className={newsPageStyle.listContainerNews}>
                    {
                        rootStore.newsStore.newsList.length > 0 ? rootStore.newsStore.newsList.map((e, i)=>{
                            return (
                                <div key={i} className={newsPageStyle.newsItem}>
                                    <a href={`/${language}/news/${e.newsId}`} target="_blank"><p className={newsPageStyle.newsTitle}>{e.title}</p></a>
                                    <div className={newsPageStyle.newsFlex}>
                                        <div className={newsPageStyle.newsPicture}>
                                            <img src={e.titlePicUrl} alt="" />
                                        </div>
                                        <div className={newsPageStyle.newsDescBox}>
                                            <div className={newsPageStyle.newsDesc}>{e.newsAbstract}</div>
                                            <p className={newsPageStyle.newsInfo}>
                                                <span className={newsPageStyle.newsFrom}>{`${langText.app.news.source}:${e.source}`}</span>
                                                <span className={newsPageStyle.newsTime}>{TimeFormat(e.publishTime, 'YYYY/MM/DD hh:mm')}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : (<p className={newsPageStyle.newsTitle}>{langText.app.noContent}</p>)
                    }
                </div>
                <div className={newsPageStyle.listContainerNews}>
                    {rootStore.newsStore.showNewsLoading == true && <div className={newsPageStyle.newsLoading}>
                        <NewsLoading language={language} />
                    </div>}
                    <div className={newsPageStyle.newsPagination}>
                        <Pagination currentPage={rootStore.newsStore.currentPage} totalPage={rootStore.newsStore.totalPage} onPageChanged={this.handlePageChanged.bind(this)} language={language} />
                    </div>
                </div>
            </div>
        )
    }
}