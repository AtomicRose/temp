import { action, observable, autorun } from 'mobx'
import ApiRequest from 'API/ApiRequest'
const { ApiClient } = ApiRequest
class UserStore {
    @observable newsShufflingList = []
    @observable newsTopList = []
    @observable newsList = []
    @observable currentPage = 1
    @observable totalPage = 0
    @observable pageSize = 20
    @observable showNewsLoading = false
    @observable newsDetail = {
        
    }
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action getNewsShufflingList = async (params) => {
        let res = await ApiClient.getNewsShufflingList(params)
        if (res.code === 1) {
            this.newsShufflingList = res.data.newsDataList || []
        } else {
            this.rootStore.dialogStore.openDialog({
                type: 'toast',
                theme: 'error',
                message: '' // TODO error code tips
            })
        }
    }
    @action getNewsTopList = async (params) =>{
        let res = await ApiClient.getNewsTopList(params)
        if (res.code === 1) {
            this.newsTopList = res.data.newsDataList || []
        } else {
            this.rootStore.dialogStore.openDialog({
                type: 'toast',
                theme: 'error',
                message: '' // TODO error code tips
            })
        }
    }
     @action getNewsList = async (params) => {
        this.showNewsLoading = true
        let res = await ApiClient.getNewsList(params)
        if (res.code === 1) {
            this.newsList = res.data.newsDataList || []
            this.totalPage = Math.ceil(res.data.count / this.pageSize)
        } else {
            this.rootStore.dialogStore.openDialog({
                type: 'toast',
                theme: 'error',
                message: '' // TODO error code tips
            })
        }
        this.showNewsLoading = false
    }
    @action setCurrentPage = (page) => {
        this.currentPage = page
    }
    @action getNewsDetail = async (params) => {
        let loadingSpinner = this.rootStore.dialogStore.openDialog({
            type: 'toast',
            theme: 'loading',
            message: {1: '加载中', 2: 'Loading'}[params.languageType]
        })
        let res = await ApiClient.getNewsDetail(params)
        if (res.code === 1) {
            this.newsDetail = res.data
        } else {
            this.rootStore.dialogStore.openDialog({
                type: 'toast',
                theme: 'error',
                message: '' // TODO error code tips
            })
        }
        this.rootStore.dialogStore.closeDialog(loadingSpinner)
    }
}

export default UserStore