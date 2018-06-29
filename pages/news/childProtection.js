import React from 'react'
import I18N from 'I18N'
import Head from 'next/head'
import detailStyle from 'SCSS/news/newsDetail.scss'
import NextRouter from 'next/router'

class ChildProtection extends React.Component {
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
                {language === 'zh_CN' && <div className={detailStyle.newsContainer}>
                    <div className={detailStyle.newsBox}>
                        <div className={detailStyle.title}>未成年人家长监护工程</div>
                        <div className={detailStyle.content}>
                            <h2>工程介绍</h2>
                            <p>“网络游戏未成年人家长监护工程”是一项有中华人民共和国文化部指导，多家网络游戏企业共同发起并参与实施，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿色参与网络游戏，和谐家庭关系的社会性公益行动.它提供了一种切实可行的方法，一种家长实施监控的管道，使家长纠正部分未成年子女沉迷游戏的行为成为可能。</p>
                            <p>该项社会公益行动充分反映了中国网络游戏行业高度的社会责任感，对未成年玩家合法权益的关注及用实际行动营造和谐社会的愿望。</p>
                            <h2>未成年人健康参与网络游戏提示</h2>
                            <p>随着网络在青少年中的普及，未成年人接触网络游戏已经成为普遍现象。为保护未成年人健康参与游戏，在政府进一步加强行业管理的前提下，家长也应当加强监护引导。为此，我们为未成年人参与网络游戏提供以下意见：</p>
                            <h3>1. 主动控制游戏时间</h3>
                            <p>游戏只是学习、生活的调剂，要积极参与线下的各类活动，并让父母了解自己在网络游戏中的行为和体验。</p>
                            <h3>2. 不参与可能耗费较多时间的游戏设置</h3>
                            <p>不玩大型角色扮演类游戏，不玩有PK类设置的游戏。在校学生每周玩游戏不超过2小时，每月在游戏中的花费不超过10元。</p>
                            <h3>3. 不要将游戏当作精神寄托</h3>
                            <p>尤其在现实生活中遇到压力和挫折时，应多与家人朋友交流倾诉，不要只依靠游戏来缓解压力。</p>
                            <h3>4. 养成积极健康的游戏心态</h3>
                            <p>克服攀比、炫耀、仇恨和报复等心理，避免形成欺凌弱小、抢劫他人等不良网络行为习惯。</p>
                            <h3>5. 注意保护个人信息</h3>
                            <p>包括个人家庭、朋友身份信息，家庭、学校、单位地址，电话号码等，防范网络陷阱和网络犯罪。</p>
                            <h2>申请流程</h2>
                            <img src="/static/images/applyProgress.png" alt=""/>
                            <p className={detailStyle.noIndent}>申请书打包下载： <a href="/static/doc/packagedoc.zip" target="_blank">炫踪网络未成年人用户家长监控服务申请书</a></p>
                            <p className={detailStyle.noIndent}>附件一： <a href="/static/doc/f1.doc" target="_blank">监护人信息表明书</a></p>
                            <p className={detailStyle.noIndent}>附件二： <a href="/static/doc/f2.doc" target="_blank">被监护人信息表明书</a></p>
                            <p className={detailStyle.noIndent}>附件三： <a href="/static/doc/f3.doc" target="_blank">家长监控申请书</a></p>
                            <p className={detailStyle.noIndent}>接收邮箱： cs@shinezone.com</p>
                            <p className={detailStyle.noIndent}><b>监护人可以通过来专线电话详细咨询</b></p>
                            <p className={detailStyle.noIndent}>咨询电话： <a href="tel:021-50331263" target="_blank">021-50331263</a></p>
                            <p className={detailStyle.noIndent}><b>监护人可以直接上门申请</b></p>
                            <p className={detailStyle.noIndent}>接待时间：周一至周五  9:00至18:00</p>
                            <p className={detailStyle.noIndent}>接待地址：上海市浦东新区国展路839号华电大厦5层</p>
                            <h2>常见问题</h2>
                            <p className={detailStyle.noIndent}><b>Q. 申请监护未成年人账号方式有哪些？</b></p>
                            <p className={detailStyle.noIndent}>所有账号纳入防沉迷系统，一下方式可以任选：</p>
                            <p className={detailStyle.noIndent}>1. 屏蔽账号（根据申请人意愿屏蔽个别游戏应用）</p>
                            <p className={detailStyle.noIndent}>2. 账号动态监控</p>
                            <p className={detailStyle.noIndent}><b>Q. 申请监督的账号有什么要求？</b></p>
                            <p className={detailStyle.noIndent}>账号所属人必须未满18周岁。</p>
                            <p className={detailStyle.noIndent}><b>Q. 申请人有什么要求？</b></p>
                            <p className={detailStyle.noIndent}>1. 申请人应提交较完备的申请材料，对未提供的信息要及时补充；可请熟知电脑、互联网、游戏的人员进行协助，以便提供详实资料；</p>
                            <p className={detailStyle.noIndent}>2. 申请 人应保证提交的信息真实有效；对于提供虚假信息或伪造证件，受理公司将保留进一步追究法律责任的权利。</p>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default ChildProtection