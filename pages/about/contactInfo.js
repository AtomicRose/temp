import React from 'react'
import aboutStyle from 'SCSS/about/about.scss'
import pageStyle from 'SCSS/about/contactInfo.scss'
import ColorBar from './bar'
import AboutNav from './nav'
import I18N from 'I18N'
import Input from 'COMPONENTS/Input'
import contactFormTip from 'UTILS/formTip/contactInfo'
import ApiRequest from 'API/ApiRequest'
import ErrorCode from 'UTILS/errorCode'

const {ApiClient} = ApiRequest
import { inject, observer } from 'mobx-react';
@inject('rootStore')
@observer
class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.formValue = {}
        this.state = {
            disabled: true
        }
    }
    handleOnChange(value) {
        Object.assign(this.formValue, value)
        this.setState({
            disabled: !!Object.values(this.formValue).filter((item)=>{return item.validate == false}).length > 0
        })
    }
    componentDidMount() {
        this.setState({
            disabled: !!Object.values(this.formValue).filter((item)=>{return item.validate == false}).length > 0
        })
    }
    async handleSubmit() {
        const type = {
            'incubation': 1,
            'publishing': 2,
            'pr': 3
        }
        let params = {
            timestamp: parseInt((new Date().getTime().toString().substr(0, 10)), 10),
            firstName: this.formValue.firstName.value,
            lastName: this.formValue.lastName.value,
            email: this.formValue.email.value,
            type: type[this.props.router.query.from] || 4
        }
        if (this.formValue.phoneNumber.value) {
            params.phone = this.formValue.phoneNumber.value
        }
        let res = await ApiClient.createMsg(params)
        if (res.code === 1) {
            this.props.rootStore.dialogStore.openDialog({
                type: 'toast',
                theme: 'success',
                message: { 'zh_CN': '提交成功', 'en_US': 'Submit success.' }[this.props.language],
                afterCloseCall: () => {
                    window.location.href = window.location.href
                }
            })
        } else {
            this.props.rootStore.dialogStore.openDialog({
                type: 'toast',
                theme: 'error',
                message: ErrorCode(res.code, this.props.language)
            })
        }
    }
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        const from = router.query.from
        return (
            <div className={aboutStyle.aboutPage}>
                <ColorBar language={this.props.language} router={this.props.router} />
                <AboutNav language={this.props.language} router={this.props.router} />
                <div className={pageStyle.pageContainer}>
                    <div className={pageStyle.pageBox}>
                        <div className={pageStyle.bread}><span>{langText.app.contactForm.bread[router.query.from][0]}</span>/<span>{langText.app.contactForm.bread[router.query.from][1]}</span></div>
                        <div className={pageStyle.formBox}>
                            <p className={pageStyle.contactFormTitle}>{langText.app.contactForm.contactFormTitle}</p>
                            <p className={pageStyle.contactFormDesc}>{langText.app.contactForm.contactFormDesc}</p>
                            <p className={pageStyle.callTitle}>{langText.app.contactForm.callTitle}</p>
                            <div className={pageStyle.column}>
                                <Input type="text" name="firstName" maxLength={30} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.firstName} placeholder={langText.app.contactForm.firstName} required={true} rule={(value, callback)=>{
                                    if (!value) {
                                        return callback(contactFormTip.firstNameEmpty[language])
                                    }
                                    if (value && (/[0-9]/g).test(value)) {
                                        return callback(contactFormTip.firstNameApplicable[language])
                                    }
                                    return callback()
                                }} />
                                <Input type="text" name="lastName" maxLength={30} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.lastName} placeholder={langText.app.contactForm.lastName} required={true} rule={(value, callback)=>{
                                    if (!value) {
                                        return callback(contactFormTip.lastNameEmpty[language])
                                    }
                                    if (value && (/[0-9]/g).test(value)) {
                                        return callback(contactFormTip.lastNameApplicable[language])
                                    }
                                    return callback()
                                }} />
                                <Input type="text" name="phoneNumber" maxLength={11} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.phoneNumber} placeholder={`+86`} required={false} rule={(value, callback)=>{
                                    if (value && !(/^1[2-9]{2}[0-9]{8}$/g).test(value)) {
                                        return callback(contactFormTip.phoneNumberApplicable[language])
                                    }
                                    return callback()
                                }} />
                            </div>
                            <div className={pageStyle.column}>
                                <Input type="text" name="email" maxLength={30} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.email} placeholder={langText.app.contactForm.email} required={true} rule={(value, callback)=>{
                                    if (!value) {
                                        return callback(contactFormTip.emailEmpty[language])
                                    }
                                    if (value && !(/^\S+\@\S+\.\S+$/g).test(value)) {
                                        return callback(contactFormTip.emailApplicable[language])
                                    }
                                    return callback()
                                }} />
                                <Input type="textarea" name="message" maxLength={3000} rows={6} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.message} placeholder={langText.app.contactForm.message} required={true} rule={(value, callback)=>{
                                    if (!value) {
                                        return callback(contactFormTip.messageEmpty[language])
                                    }
                                    if (value && value.length < 10) {
                                        return callback(contactFormTip.messageMinLimit[language])
                                    }
                                    return callback()
                                }} />
                                <button type="button" className={pageStyle.submitBtn} disabled={this.state.disabled} onClick={()=>this.handleSubmit()}>{langText.app.contactForm.submit}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs