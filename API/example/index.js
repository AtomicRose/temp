import HttpRequest from 'UTILS/HttpRequest'
import hosts from 'CONFIG/hosts'

let API = {
    getUserInfo: async (params) => {
        return await HttpRequest.GET({
            url: `${hosts.example}/api/user/getUserInfo`,
            params: {
                userId: "100230"
            }
        })
    },
    changeUserInfo: async (params) => {
        return await HttpRequest.GET({
            url: `${hosts.example}/api/user/getUserInfo`,
            params: {
                userId: "100231"
            }
        })
    }
}

export default API