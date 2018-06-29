import { action, observable, autorun } from 'mobx'
import ApiRequest from 'API/ApiRequest'
const { ApiClient } = ApiRequest
class UserStore {
    @observable jobCategory = {
        'zh_CN': [],
        'en_US': []
    }
    @observable searchKey = ''
    @observable jobType = {
        value: '',
        job: ''
    }
    @observable jobList = []
    @observable currentJob = {}
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    @action changeSearchInput = (key) => {
        this.searchKey = key
    }
    @action changeJobCategory = (key) => {
        this.jobType = key
    }
    @action changeCurrentJob = async (job) => {
        this.currentJob = job
        let res = await ApiClient.getJobDetail({
            timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
            languageType: job.languageType,
            jobId: job.jobId
        })
        if (res.code === 1) {
            this.currentJob = res.data
        }
    }
    @action getJobCategory = async (params) => {
        let res = await ApiClient.getJobType(params)
        if (res.code === 1) {
            this.jobCategory['zh_CN'] = res.data.cnList || []
            this.jobCategory['en_US'] = res.data.enList || []
        }
    }
    @action getJobList = async (params) => {
        let res = await ApiClient.getJobList(params)
        if (res.code === 1) {
            this.jobList = res.data.jobDataList || []
        }
    }
}

export default UserStore