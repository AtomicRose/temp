import React from 'react'
import aboutStyle from 'SCSS/about/about.scss'
import pageStyle from 'SCSS/about/contactInfo.scss'
import I18N from 'I18N'
import Input from 'COMPONENTS/Input'
import contactFormTip from 'UTILS/formTip/contactInfo'
import ApiRequest from 'API/ApiRequest'
import UploadFile from 'COMPONENTS/UploadFile'
import ErrorCode from 'UTILS/errorCode'
const { ApiClient } = ApiRequest
import { inject, observer } from 'mobx-react';
@inject('rootStore')
@observer
class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.formValue = {}
        this.state = {
            disabled: true,
            fileName: ''
        }
    }
    handleOnChange(value) {
        Object.assign(this.formValue, value)
        this.setState({
            disabled: !!Object.values(this.formValue).filter((item) => { return item.validate == false }).length > 0
        })
    }
    componentDidMount() {
        this.setState({
            disabled: !!Object.values(this.formValue).filter((item) => { return item.validate == false }).length > 0
        })
    }
    async handleSubmit() {
        if (!this.fileUrl || !this.fileName) {
            this.props.rootStore.dialogStore.openDialog({
                type: 'toast',
                theme: 'info',
                // TODO you need the errorTips file
                message: { 'zh_CN': '请上传游戏案例', 'en_US': 'Please upload the game demo.' }[this.props.language]
            })
            return false;
        }
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
            type: type[this.props.router.query.from] || 4,
            workExperience: this.formValue.producer.value,
            gameIntroduction: this.formValue.gameDesc.value,
            demoUrl: this.fileUrl,
            demoName: this.state.fileName
        }
        if (this.formValue.phoneNumber.value) {
            params.phone = this.formValue.phoneNumber.value
        }
        if (this.formValue.address.value) {
            params.address = this.formValue.address.value
        }
        if (this.formValue.gameGenre.value) {
            params.gameGenre = this.formValue.gameGenre.value
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
                // TODO you need the errorTips file
                message: ErrorCode(res.code, this.props.language)
            })
        }
    }
    async handleFileChange(e) {
        if (e.target.files.length) {
            UploadFile.init({
                apiRequest: ApiRequest.ApiClient.getUploadingUrl
            })
            let file = e.target.files[0]
            let loadingSpinner = this.props.rootStore.dialogStore.openDialog({
                type: 'toast',
                theme: 'loading',
                autoClose: false,
                message: { 'zh_CN': '正在上传...', 'en_US': 'Uploading...' }[this.props.language]
            })
            let res = await UploadFile.uploading(file)
            this.props.rootStore.dialogStore.closeDialog(loadingSpinner)
            if (res) {
                this.setState({
                    fileName: file.name
                })
                this.fileUrl = res.fileUrl
                this.fileName = file.name
                this.props.rootStore.dialogStore.openDialog({
                    type: 'toast',
                    theme: 'success',
                    message: { 'zh_CN': '上传成功', 'en_US': 'Upload success.' }[this.props.language]
                })
            } else {
                this.props.rootStore.dialogStore.openDialog({
                    type: 'toast',
                    theme: 'error',
                    message: { 'zh_CN': '上传失败，请重试', 'en_US': 'Upload failed, retry please.' }[this.props.language]
                })
            }
        }
    }
    handleDeleteFile() {
        this.fileUrl = ''
        this.fileName = ''
        this.setState({
            fileName: ''
        })
        document.getElementById('demoFile').value = ''
    }
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        const from = router.query.from
        return (
            <div className={aboutStyle.aboutPage}>
                <div className={pageStyle.incubationBanner}>
                    <div className={pageStyle.pageBox}>
                        <p className={pageStyle.incubationText}><span className={pageStyle.incubationTitle}>{langText.app.contactForm.incubationTitle}</span><span className={pageStyle.incubationSlogan}>{langText.app.contactForm.incubationSlogan}</span></p>
                    </div>
                </div>
                <div className={pageStyle.pageContainer}>
                    <div className={pageStyle.pageBox}>
                        <div className={pageStyle.bread}><span><a href={`/${language}/incubator`}>{langText.app.contactForm.bread[router.query.from][0]}</a></span>/<span>{langText.app.contactForm.bread[router.query.from][1]}</span></div>
                        <div className={pageStyle.formBox}>
                            <p className={pageStyle.contactFormTitle}>{langText.app.contactForm.contactFormTitle}</p>
                            <p className={pageStyle.contactFormDesc}>{langText.app.contactForm.contactFormDesc}</p>
                            <p className={pageStyle.callTitle}>{langText.app.contactForm.callTitle}</p>
                            <div className={pageStyle.column}>
                                <Input type="text" name="firstName" maxLength={30} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.firstName} placeholder={langText.app.contactForm.firstName} required={true} rule={(value, callback) => {
                                    if (!value) {
                                        return callback(contactFormTip.firstNameEmpty[language])
                                    }
                                    if (value && (/[0-9]/g).test(value)) {
                                        return callback(contactFormTip.firstNameApplicable[language])
                                    }
                                    return callback()
                                }} />
                                <Input type="text" name="lastName" maxLength={30} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.lastName} placeholder={langText.app.contactForm.lastName} required={true} rule={(value, callback) => {
                                    if (!value) {
                                        return callback(contactFormTip.lastNameEmpty[language])
                                    }
                                    if (value && (/[0-9]/g).test(value)) {
                                        return callback(contactFormTip.lastNameApplicable[language])
                                    }
                                    return callback()
                                }} />
                                <Input type="text" name="phoneNumber" maxLength={11} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.phoneNumber} placeholder={`+86`} required={false} rule={(value, callback) => {
                                    if (value && !(/^1[2-9]{2}[0-9]{8}$/g).test(value)) {
                                        return callback(contactFormTip.phoneNumberApplicable[language])
                                    }
                                    return callback()
                                }} />
                                <Input type="text" name="email" maxLength={30} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.email} placeholder={langText.app.contactForm.email} required={true} rule={(value, callback) => {
                                    if (!value) {
                                        return callback(contactFormTip.emailEmpty[language])
                                    }
                                    if (value && !(/^\S+\@\S+\.\S+$/g).test(value)) {
                                        return callback(contactFormTip.emailApplicable[language])
                                    }
                                    return callback()
                                }} />
                                <Input type="text" name="address" maxLength={100} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.address} placeholder={langText.app.contactForm.address} required={false} rule={(value, callback) => {
                                    return callback()
                                }} />

                            </div>
                            <div className={pageStyle.column}>
                                <Input type="text" name="gameGenre" maxLength={100} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.genre} placeholder={langText.app.contactForm.genre} required={false} rule={(value, callback) => {
                                    return callback()
                                }} />
                                <Input type="textarea" name="producer" maxLength={3000} rows={6} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.producer} placeholder={langText.app.contactForm.producer} required={true} rule={(value, callback) => {
                                    if (!value) {
                                        return callback(contactFormTip.producerEmpty[language])
                                    }
                                    if (value && value.length < 10) {
                                        return callback(contactFormTip.producerMinLimit[language])
                                    }
                                    return callback()
                                }} />
                                <Input type="textarea" name="gameDesc" maxLength={3000} rows={6} onChange={this.handleOnChange.bind(this)} label={langText.app.contactForm.gameDesc} placeholder={langText.app.contactForm.gameDesc} required={true} rule={(value, callback) => {
                                    if (!value) {
                                        return callback(contactFormTip.messageEmpty[language])
                                    }
                                    if (value && value.length < 10) {
                                        return callback(contactFormTip.messageMinLimit[language])
                                    }
                                    return callback()
                                }} />

                                <p className={pageStyle.demoUpload}>{langText.app.contactForm.demoUpload}</p>
                                <label htmlFor="demoFile" className={pageStyle.uploadBtn}>{langText.app.contactForm.uploadBtn}</label>
                                <p className={pageStyle.uploadTip}>{langText.app.contactForm.uploadTip}</p>
                                {this.state.fileName && <div className={pageStyle.fileNameBox}><p className={pageStyle.fileName}><span>{this.state.fileName}</span><span className={pageStyle.closeIcon} onClick={() => this.handleDeleteFile()}></span></p></div>}
                                <input type="file" id="demoFile" style={{ display: 'none' }} onChange={(e) => this.handleFileChange(e)} />
                                <br />
                                <button type="button" className={pageStyle.submitBtn} disabled={this.state.disabled} onClick={() => this.handleSubmit()}>{langText.app.contactForm.submit}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs