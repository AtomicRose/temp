const hosts = {
    production: {
        example: 'http://ns.chaojita.cn',
        localApi: 'http://localhost:3000',
        domain: 'http://localhost:3000',
        api: 'http://172.16.1.21:8000'
    },
    alpha: {

    },
    test: {
        example: 'http://ns.chaojita.cn',
        localApi: 'https://qa-officialsite-client.shinezone.com',
        domain: 'https://qa-officialsite-client.shinezone.com',
        api: 'https://os-qa-officialsite.shinezone.com'
    },
    development: {
        example: 'http://ns.chaojita.cn',
        localApi: 'http://localhost:3000',
        domain: 'http://localhost:3000',
        api: 'http://172.16.1.21:8000'
    }
}
let host = hosts.production

if (__DEV__) {
    host = hosts.development
}
if (__TEST__) {
    host = hosts.test
}
if (__ALPHA__) {
    host = hosts.alpha
}
if (__PROD__) {
    host = hosts.production
}

export default host