import HttpRequest from 'UTILS/HttpRequest'
import hosts from 'CONFIG/hosts'

let API = {
    getUserInfo: async (params) => {
        return await HttpRequest.GET({
            url: `${hosts.localApi}/tools/generateQRCode`,
            params: params || {}
        })
    }
}

export default API