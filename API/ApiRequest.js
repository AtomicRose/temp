import ApiClient from 'API/support/ApiClient'
import HttpRequest from 'UTILS/HttpRequest'
import hosts from 'CONFIG/hosts'

const needMock = false
let postFn = async (path, requestOptions) => {
    const res = await HttpRequest.POST({
        url: `${hosts.api}${path}${__DEV__ && needMock ? '?mock=1' : ''}`,
        params: JSON.parse(requestOptions.body)
    })
    return res
}
let keys = Object.keys(ApiClient)
let request = {}
for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    request[key] = async (params) => {
        const res = await ApiClient[key](params || {}, postFn, {})
        return res
    }
}
export default {
    ApiClient: request
}