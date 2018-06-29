import React from 'react'
import { inject, observer } from 'mobx-react';
import aboutStyle from 'SCSS/about/about.scss'
import pageStyle from 'SCSS/about/job.scss'
import ColorBar from './bar'
import AboutNav from './nav'
import I18N from 'I18N'

@inject('rootStore')
@observer
class AboutUs extends React.Component {
    componentWillMount() {
        this.props.rootStore.jobStore.getJobCategory({
            timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10)
        })
        this.getJobList({
            filterValue: this.props.rootStore.jobStore.searchKey || '',
            jobType: this.props.rootStore.jobStore.jobType.value || ''
        })
    }
    getJobList(c) {
        let params = {
            timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
            languageType: this.props.language === 'en_US' ? 2 : 1,
            state: 2,
            start: 0,
            limit: 99
        }
        if (c && c.jobType) {
            params.jobType = c.jobType
        }
        if (c && c.filterValue) {
            params.filterValue = c.filterValue
        }
        this.props.rootStore.jobStore.getJobList(params)
    }
    handleChangeSearchInput(e) {
        this.props.rootStore.jobStore.changeSearchInput(e.target.value)
    }
    handleClickSearch() {
        this.getJobList({
            filterValue: this.props.rootStore.jobStore.searchKey,
            jobType: this.props.rootStore.jobStore.jobType.value
        })
    }
    handleChangeCategory(e) {
        this.props.rootStore.jobStore.changeJobCategory(e)
        this.getJobList({
            filterValue: this.props.rootStore.jobStore.searchKey,
            jobType: this.props.rootStore.jobStore.jobType.value
        })
    }
    handleToggleJobDetail(e) {
        this.props.rootStore.jobStore.changeCurrentJob(e)
    }
    render() {
        const { language, router, rootStore } = this.props
        console.log(rootStore)
        const langText = I18N.langText(language)
        /**
         * now you can use the category from database
         */
        // const category = langText.app.join.job.categoryList
        let category = rootStore.jobStore.jobCategory[language]
        const categoryItems = []
        category.map((e, i) => {
            categoryItems.push(<span key={i} className={rootStore.jobStore.jobType.value === e.value ? `${pageStyle.categoryItem} ${pageStyle.categoryItemActive}` : `${pageStyle.categoryItem}`} onClick={() => this.handleChangeCategory(e)}>{e.job}</span>)
        })
        return (
            <div className={aboutStyle.aboutPage}>
                <ColorBar language={this.props.language} router={this.props.router} />
                <AboutNav language={this.props.language} router={this.props.router} />
                <div className={pageStyle.pageContainer}>
                    <div className={pageStyle.pageBox}>
                        <div className={pageStyle.bread}>
                            <span><a href={`/${language}/join`}>{langText.app.join.jobBread[0]}</a></span>
                            <span>/</span>
                            <span>{langText.app.join.jobBread[1]}</span>
                        </div>
                        <div className={pageStyle.vacanciesBox}>
                            <div className={pageStyle.leftBox}>
                                <div className={pageStyle.boxContainer}>
                                    <p className={pageStyle.searchTitle}>{langText.app.join.job.searchTitle}</p>
                                    <div className={pageStyle.searchBox}>
                                        <input type="text" value={rootStore.jobStore.searchKey} onChange={(e) => this.handleChangeSearchInput(e)} placeholder={langText.app.join.job.keywords} />
                                        <span onClick={() => this.handleClickSearch()}></span>
                                    </div>
                                    <hr className={pageStyle.searchBoxLine} />
                                    <p className={pageStyle.categoryTitle}>{langText.app.join.job.categoryTitle}</p>
                                    <div className={pageStyle.categoryBox}>
                                        {categoryItems}
                                    </div>
                                </div>
                            </div>
                            <div className={pageStyle.rightBox}>
                                <div className={pageStyle.boxContainer2}>
                                    <p className={pageStyle.inviteTip}>{langText.app.join.job.inviteTip}</p>
                                    <p className={pageStyle.sendTip}>{langText.app.join.job.sendTip}</p>
                                    <div>
                                        {/* Here you need the selected category text */}
                                        <div className={pageStyle.currentCategoryBox}>
                                            <span className={pageStyle.currentCategoryText}>{rootStore.jobStore.jobType.job || langText.app.join.job.allJob}</span>
                                            <hr />
                                        </div>
                                        {
                                            rootStore.jobStore.jobList.length > 0 ? rootStore.jobStore.jobList.map((e, i)=>{
                                                return (
                                                    <div key={i} className={`${pageStyle.jobItem} ${rootStore.jobStore.currentJob.jobId === e.jobId ? pageStyle.jobItemActive : ''}`}>
                                                        <div className={pageStyle.jobTitle} onClick={()=>this.handleToggleJobDetail(e)}>
                                                            <span className={pageStyle.titleText}>{e.name}</span>
                                                            <span className={pageStyle.titleOperate}>{rootStore.jobStore.currentJob.jobId === e.jobId ? '-' : '+'}</span>
                                                        </div>
                                                        <div className={pageStyle.jobBox}>
                                                            <hr className={pageStyle.jobLine} />
                                                            <div className={pageStyle.jobContent}>{rootStore.jobStore.currentJob.description || langText.app.noContent}</div>
                                                        </div>
                                                    </div>
                                                )
                                            }) : <p className={pageStyle.sendTip}>{langText.app.noContent}</p>
                                        }
                                    </div>
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