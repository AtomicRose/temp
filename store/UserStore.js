import { action, observable, autorun, computed } from 'mobx'
import exampleApi from 'API/example'
import ApiRequest from 'API/ApiRequest'

class UserStore {
    @observable user = {
        avatar: '',
        nickName: ''
    }
    @observable jobList = ''
    constructor(rootStore) {
        this.rootStore = rootStore
        // autorun(async () => {
        //    const res = await exampleApi.getUserInfo()
        //    this.user = res.data
        // })
    }

    @action getUserInfo = async () => {
        const res = await exampleApi.getUserInfo()
        this.user = res.data
    }
    @action getJobList = async (params) => {
        const res = await ApiRequest.ApiClient.getJobList(params || {})
        this.jobList = res
    }
    @action changeUserInfo = async () => {
        const res = await exampleApi.changeUserInfo()
        this.user = res.data
    }
    @computed get allInfo() {
        return this.user.nickName + this.user.id
    }
}

export default UserStore