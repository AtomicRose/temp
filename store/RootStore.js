
import CommonStore from 'STORE/CommonStore'
import UserStore from 'STORE/UserStore'
import HeaderStore from 'STORE/HeaderStore'
import FooterStore from 'STORE/FooterStore'
import DialogStore from 'STORE/DialogStore'
import JobStore from 'STORE/JobStore'
import HomeStore from 'STORE/HomeStore'
import NewsStore from 'STORE/NewsStore'
let store = null
class RootStore {
    constructor() {
        // here you need bind other store to the RootStore. So you can use other store by used rootStore.XXXX
        this.userStore = new UserStore(this)
        this.commonStore = new CommonStore(this)
        this.headerStore = new HeaderStore(this)
        this.footerStore = new FooterStore(this)
        this.dialogStore = new DialogStore(this)
        this.jobStore = new JobStore(this)
        this.homeStore = new HomeStore(this)
        this.newsStore = new NewsStore(this)
    }
}

export function initRootStore(isServer) {
    if (isServer) {
        return new RootStore()
    } else {
        if (store === null) {
            store = new RootStore(isServer)
        }
        return store
    }
}