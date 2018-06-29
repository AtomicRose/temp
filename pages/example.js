import I18N from 'I18N'
import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react';
import fetch from "isomorphic-fetch"
import { Button } from 'antd'
import Head from 'next/head'
import ApiRequest from 'API/ApiRequest'
import UploadFile from 'COMPONENTS/UploadFile'
import host from 'CONFIG/hosts'

@inject('rootStore')
@observer
class Error extends React.Component {
    static async getInitialProps() {
    }
    constructor(props) {
        super(props)
        const { rootStore } = props
        /**
         * Here, you need init your page data in mobx store.
         * Usually, do some actions.
         */
        // rootStore.userStore.getUserInfo()
        rootStore.userStore.getJobList({
            timestamp: 1528198675,
            languageType: 1,
            state: 1,
            start: 0,
            limit: 10
        })
        this.state = {
            uploadImage: ''
        }
    }
    changeUserInfo() {
        this.props.rootStore.userStore.changeUserInfo()
    }
    async handleFileChange(e) {
        if(e.target.files.length) {
            UploadFile.init({
                apiRequest: ApiRequest.ApiClient.getUploadingUrl
            })
            let res = await UploadFile.uploading(e.target.files[0])
            if (res) {
                this.setState({
                    uploadImage: res.fileUrl
                })
                alert('upload success')
            } else {
                alert('upload failed, retry please')
            }
        }
    }
    componentDidMount() {
        this.props.rootStore.dialogStore.openDialog({
            type: 'toast',
            message: 'agdafdasfasdfasdfasdf',
            autoClose: 3,
            afterCloseCall: (key) => {
                console.log(key)
            }
        })
        this.props.rootStore.dialogStore.openDialog({
            type: 'toast',
            theme: 'info',
            message: 'abdfasdfsdc',
            autoClose: 5,
            afterCloseCall: (key) => {
                console.log(key)
            }
        })
        this.props.rootStore.dialogStore.openDialog({
            type: 'alert',
            language: this.props.language,
            message: 'this is confirm我勒个去',
            beforeCloseCall: (key) => {
                console.log(key)
                if (key === 'cancel') {
                    console.log('i click the cancel btn. but return false. The dialog will not be closed.')
                    return false
                }
                return true
            },
            afterCloseCall: (key) => {
                console.log(key + ':' + 'i have closed the dialog')
            }
        })
    }
    render() {
        const { language, store, rootStore } = this.props
        const langText = I18N.langText(language)
        const changeLang = (language === 'zh_CN' ? 'en_US' : 'zh_CN')
        return (
            <div>
                <Head>
                    <title>Example</title>
                </Head>
                <p>{langText.example.pageError}</p>
                <Link href={`/${changeLang}/example`}>
                    <button>change language</button>
                </Link>
                <p>--------User Info---------</p>
                <p>{`${rootStore.userStore.user ? rootStore.userStore.user.nickName : ''}`}</p>
                <p>{rootStore.userStore.allInfo}</p>
                <Button htmlType="button" type="primary" onClick={() => this.changeUserInfo()}>改变用户信息</Button>
                <Link href={`/example/antd`}>
                    <Button htmlType="button" type="danger" onClick={() => this.changeUserInfo()}>看看Antd的用法</Button>
                </Link>
                <br />
                <br />
                <br />
                <br />
                <label htmlFor="uploadFile">上传文件</label>
                <input type="file" id="uploadFile" style={{display: 'none'}} onChange={(e)=>this.handleFileChange(e)}/>
                <img src={this.state.uploadImage} alt=""/>
            </div>
        )
    }
}


export default Error