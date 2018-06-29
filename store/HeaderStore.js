import { action, observable, autorun } from 'mobx'

class UserStore {
    @observable toggleLanguage = false
    @observable toggleNav = false
    @observable headerBackground = false
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action toggle = (value) => {
        this.toggleLanguage = value
    }
    @action toggleNavBar = () => {
        this.toggleNav = !this.toggleNav
    }
    @action setHeaderBackground = (status) => {
        this.headerBackground = !!status
    }
}

export default UserStore