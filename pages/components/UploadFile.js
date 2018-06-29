import fetch from "isomorphic-fetch"

class UploadFile {
    constructor() {
        this.config = {
            domain: 'localhost: 3000',
            getUploadUrlApi: '/v1/common/getUploadingUrl',
            uploadingUrlApi: '',
            apiRequest: ''
        }
        this.uploadingUrl = ''
    }
    init(conf) {
        Object.assign(this.config, conf || {})
    }
    async getUploadUrl(fileName) {
        try {
            if (this.config.apiRequest) {
                let res = await this.config.apiRequest({
                    timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
                    fileName: fileName
                })
                this.uploadingUrl = res.data.uploadingUrl || ''
            } else {
                let res = await fetch(this.config.domain + this.config.getUploadUrlApi, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        timestamp: parseInt(new Date().getTime().toString().substr(0, 10), 10),
                        fileName: fileName
                    })
                })
                if (res.ok && res.status === 200) {
                    let json = {}
                    json = await res.json()
                    if (json.code > 1) {
                        this.uploadingUrl = ''
                        return false
                    }
                    this.uploadingUrl = json.data.uploadingUrl || ''
                }
            }
            return this.uploadingUrl
           
        } catch (error) {
            console.log(error)
        }
        return false
    }
    async uploading(file) {
        await this.getUploadUrl(file.name)
        try {
            let url = this.uploadingUrl
            if (!url) {
                return false
            }
            let res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: file
            })
            if (res.status === 200) {
                return {
                    fileUrl: this.uploadingUrl.split('?')[0]
                }
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
        }
        return false
    }
}

export default new UploadFile()