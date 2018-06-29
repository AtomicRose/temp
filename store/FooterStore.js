import { action, observable, autorun } from 'mobx'

class UserStore {
    @observable showQRCode = false
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action setQRCodeStatus = (status) => {
        this.showQRCode = !!status
    }
}

export default UserStore