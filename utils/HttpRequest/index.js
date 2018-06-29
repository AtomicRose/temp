import fetch from "isomorphic-fetch"

const defaults = {
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    },
    credentials: 'same-origin',
    ignoreAuthorization: false
}
let doRequest = async (url, options, todoObj) => {
    let res = '' 
    let json = {}
    try {
        res = await fetch(url, options)
        if (res.ok && res.status === 200) {
            json = await res.json()
        } else {
            // do some request error things
        }
    } catch(e) {
        console.log('fetch error', e)
    }
    return json
}
/**
 * reqObj {
 *      url: .....,
 *      params: ......
 * }
 */
let HttpRequest = {
    GET: (reqObj, opts) => {
        let url = reqObj.url
        let keys = Object.keys(reqObj.params || {})
        for (var i = 0; i < keys.length; i++) {
            let currentKey = keys[i]
            if (i === 0 && url.indexOf('?') != -1) {
                url = url + '&' + currentKey + '=' + reqObj.params[currentKey]
            } else {
                url = url + (i === 0 ? '?' : '&') + currentKey + '=' + reqObj.params[currentKey]
            }
        }
        return doRequest(url, Object.assign({}, defaults, opts, { method: 'GET' }))
    },
    POST: (reqObj, opts) => {
        return doRequest(reqObj.url, Object.assign({}, defaults, opts, { method: 'POST', body: JSON.stringify(reqObj.params || {}) }))
    },
    PUT: (reqObj, opts) => {
        return doRequest(reqObj.url, Object.assign({}, defaults, opts, { method: 'PUT', body: JSON.stringify(reqObj.params || {}) }))
    },
    DELETE: (reqObj, opts) => {
        return doRequest(reqObj.url, Object.assign({}, defaults, opts, { method: 'DELETE', body: JSON.stringify(reqObj.params || {}) }))
    }
}

export default HttpRequest