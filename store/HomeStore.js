import { action, observable, autorun } from 'mobx'
import ApiRequest from 'API/ApiRequest'
const { ApiClient } = ApiRequest
class UserStore {
    @observable gameList = []
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action getGameList = async (params) => {
        let res = await ApiClient.getGameList(params)
        if (res.code === 1) {
            let temp = res.data.gameDataList || []
            temp.sort(function(a, b) {
                if (a.no < b.no) {
                    return -1
                } else {
                    return 1
                }
            })
            this.gameList = temp
        }
    }
}

export default UserStore