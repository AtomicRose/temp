import React from 'react'
import { inject, observer } from 'mobx-react';
import headerStyle from 'SCSS/header/header.scss'
import toolStyle from 'SCSS/tool.scss'
import I18N from 'I18N'
import Link from 'next/link'
import NextRouter from 'next/router'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

@inject('rootStore')
@observer
class Header extends React.Component {
    handleChangeLanguage(lang) {
        let path = this.props.router.asPath.replace(this.props.language, lang)
        if (path === '/') {
            path = `/${lang}`
        }
        NextRouter.push(path)
    }
    handleToggleLanguage(value) {
        if (this.props.rootStore.headerStore.toggleNav) {
            this.props.rootStore.headerStore.toggleNavBar()
        }
        this.props.rootStore.headerStore.toggle(value)
    }
    handleShowNav() {
        if (this.props.rootStore.headerStore.toggleLanguage) {
            this.props.rootStore.headerStore.toggle()
        }
        this.props.rootStore.headerStore.toggleNavBar()
    }
    componentDidMount() {
        this.props.rootStore.headerStore.setHeaderBackground(window.scrollY > 40 || this.props.router.query.category == 'news' || this.props.router.query.category == 'other' || this.props.router.query.category == 'incubator')
        // window.onscroll = () => {
        //     this.props.rootStore.headerStore.setHeaderBackground(window.scrollY > 40 || this.props.router.query.category == 'news' || this.props.router.query.category == 'other' || this.props.router.query.category == 'incubator')
        // }
        window.addEventListener('scroll', () => {
            this.props.rootStore.headerStore.setHeaderBackground(window.scrollY > 40 || this.props.router.query.category == 'news' || this.props.router.query.category == 'other' || this.props.router.query.category == 'incubator')
        })
    }
    render() {
        const { language, rootStore, router } = this.props
        const langText = I18N.langText(language)
        return (
            <div className={rootStore.headerStore.headerBackground ? `${headerStyle.header} ${(this.props.router.query.category == 'about') ? headerStyle.headerActive2 : headerStyle.headerActive}` : headerStyle.header}>
                <div className={headerStyle.headerContainer}>
                    <div className={headerStyle.logo}>
                        <Link href={`/${language}/`}><img src={`${publicRuntimeConfig.staticFolder}/images/logo_en.png`} alt="" /></Link>
                    </div>
                    <div className={headerStyle.rightBox}>
                        <div className={headerStyle.mNavIcon} onClick={() => this.handleShowNav()}>
                            <img src={`${publicRuntimeConfig.staticFolder}/images/nav_icon.png`} alt="更多" />
                        </div>

                        <div className={headerStyle.langContainer} onMouseOver={() => this.handleToggleLanguage(true)} onMouseOut={() => this.handleToggleLanguage(false)}>
                            <div className={rootStore.headerStore.toggleLanguage ? `${headerStyle.lang} ${headerStyle.langActive}` : headerStyle.lang} >
                                <span className={headerStyle.langText}>{langText.shortName}</span><span className={headerStyle.triangleDown}></span>
                            </div>
                            <div className={rootStore.headerStore.toggleLanguage ? `${headerStyle.langList} ${toolStyle.dBlock}` : headerStyle.langList}>
                                <ul>
                                    <li onClick={() => this.handleChangeLanguage('en_US')} className={language === 'en_US' ? headerStyle.langItemActive : ''}>English</li>
                                    <li onClick={() => this.handleChangeLanguage('zh_CN')} className={language === 'zh_CN' ? headerStyle.langItemActive : ''}>简体中文</li>
                                </ul>
                            </div>
                        </div>
                        <div className={rootStore.headerStore.toggleNav ? `${headerStyle.navBar} ${toolStyle.dBlock}` : headerStyle.navBar}>
                            <ul>
                                <li className={router.query.category === 'home' ? headerStyle.navBar_active : ''}>
                                    <Link href={`/${language}/`}>
                                        <span>{langText.app.navBar.home}</span>
                                    </Link>
                                </li>
                                <li className={router.query.category === 'news' ? headerStyle.navBar_active : ''}>
                                    <Link href={`/${language}/news`}>
                                        <span>{langText.app.navBar.news}</span>
                                    </Link>
                                </li>
                                <li className={router.query.category === 'publishing' ? headerStyle.navBar_active : ''}>
                                    <Link href={`/${language}/publish`}>
                                        <span>{langText.app.navBar.publishing}</span>
                                    </Link>
                                </li>
                                <li className={router.query.category === 'incubator' ? headerStyle.navBar_active : ''}>
                                    <Link href={`/${language}/incubator`}>
                                        <span>{langText.app.navBar.incubator}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header