import { action, observable, autorun } from 'mobx'

const defaults = {
    'zh_CN': {
        id: 0,
        type: 'toast',
        theme: 'default',
        title: '温馨提示',
        message: '',
        cancelText: '取消',
        okText: '确定',
        beforeCloseCall: function(value) {
            return true
        },
        afterCloseCall: function (value) {
        },
        autoClose: false,
        language: 'zh_CN'
    },
    'en_US': {
        id: 0,
        type: 'toast',
        theme: 'default',
        title: 'Tips',
        message: '',
        cancelText: 'Cancel',
        okText: 'OK',
        beforeCloseCall: function(value) {
            return true
        },
        afterCloseCall: function (value) {
        },
        autoClose: '',
        language: 'en_US'
    }
}
class UserStore {
    @observable toast = []
    @observable alert = []
    @observable confirm = []
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action openDialog = (o) => {
        let opts = o || {}
        let options = Object.assign({}, defaults[opts.language || 'zh_CN'], opts)
        options.id = new Date().getTime()
        if (opts.type === 'toast') {
            options.autoClose = opts.autoClose !== undefined ? options.autoClose : 3
            this.toast.push(options)
        }
        if (opts.type === 'alert') {
            this.alert.push(options)
        }
        if (opts.type === 'confirm') {
            this.confirm.push(options)
        }
        if (options.autoClose && typeof options.autoClose === 'number') {
            setTimeout(() => {
                this[options.type].map((e, i) => {
                    if (e.id === options.id) {
                        this[options.type].splice(i, 1)
                        options.afterCloseCall('auto')
                    }
                })
            }, options.autoClose * 1000)
        }
        return options
    }
    @action closeDialog = (o, closeType) => {
        if (typeof o === 'string') {
            if (o === 'toast') {
                this.toast = []
            }
            if (o === 'alert') {
                this.alert = []
            }
            if (o === 'confirm') {
                this.confirm = []
            }
            if (o === 'all' || o === 'A') {
                this.toast = []
                this.alert = []
                this.confirm = []
            }
        }
        if (typeof o === 'object') {
            this[o.type].map((e, i) => {
                if (e.id === o.id) {
                    if (o.beforeCloseCall(closeType)) {
                        o.afterCloseCall(closeType)
                        this[o.type].splice(i, 1)
                    } else {

                    }
                }
            })
        }
    }
}

export default UserStore