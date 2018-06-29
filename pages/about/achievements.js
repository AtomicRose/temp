import React from 'react'
import aboutStyle from 'SCSS/about/about.scss'
import pageStyle from 'SCSS/about/achievements.scss'
import ColorBar from './bar'
import AboutNav from './nav'
import I18N from 'I18N'
import Slider3d from 'COMPONENTS/Slider3d'
class AboutUs extends React.Component {
    componentDidMount() {
        let ele = document.getElementsByName('milestones')
        let s = document.getElementById('progressBox')
        ele.forEach((e, i) => {
            change(e, window.innerHeight - (s.offsetTop + e.offsetTop + e.clientHeight) + window.scrollY)
        })
        // window.onscroll = () => {
        //     ele.forEach((e, i) => {
        //         change(e, window.innerHeight - (s.offsetTop + e.offsetTop + e.clientHeight) + window.scrollY)
        //     })
        // }
        window.addEventListener('scroll', ()=>{
            ele.forEach((e, i) => {
                change(e, window.innerHeight - (s.offsetTop + e.offsetTop + e.clientHeight) + window.scrollY)
            })
        })
        function change (ele, marginBottom) {
            if (marginBottom > 0) {
                ele.style.left = '0'
            } else {
                // 退场动画
                // if (ele.className.match('itemBoxRight')) {
                //     ele.style.left = '50vw'
                // } 
                // if (ele.className.match('itemBoxLeft')) {
                //     ele.style.left = '-50vw'
                // }
            }
        } 
    }
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        const milestones = langText.app.growth.records
        let items = []
        for (let i = 0; i < milestones.length; i++) {
            let e = milestones[i]
            items.push(<div key={i} className={pageStyle.item}>
                <div name={'milestones'} className={(i % 2 === 0) ? pageStyle.itemBoxRight : pageStyle.itemBoxLeft}>
                    <div className={pageStyle.time}>{e.time}</div>
                    <p className={pageStyle.record}>{e.content}</p>
                </div>
            </div>)
        }
        return (
            <div className={aboutStyle.aboutPage}>
                <ColorBar language={this.props.language} router={this.props.router} />
                <AboutNav language={this.props.language} router={this.props.router} />
                <div className={pageStyle.achievementContainer}>
                    <div className={pageStyle.slider3dBox}>
                        <div className={pageStyle.box}>
                            <Slider3d showLength={5}>
                                    <ul>
                                        <li><img src={`/static/images/about/ac1_${language}.png`} alt=""/></li>
                                        <li><img src={`/static/images/about/ac2_${language}.png`} alt=""/></li>
                                        <li><img src={`/static/images/about/ac3_${language}.png`} alt=""/></li>
                                        <li><img src={`/static/images/about/ac4_${language}.png`} alt=""/></li>
                                        <li><img src={`/static/images/about/ac5_${language}.png`} alt=""/></li>
                                    </ul>
                            </Slider3d>
                        </div>
                    </div>
                    <div className={pageStyle.achievementBox}>
                        <div></div>
                        <div className={pageStyle.growth}>
                            <p className={pageStyle.growthTitle}>{langText.app.growth.title}</p>
                            <div className={pageStyle.progressBox} id="progressBox">
                                <div className={pageStyle.circle}></div>
                                <div className={pageStyle.line}></div>
                                {items}
                            </div>
                        </div>
                    </div>
                    <div className={pageStyle.grayBox}></div>
                </div>
            </div>
        )
    }
}

export default AboutUs