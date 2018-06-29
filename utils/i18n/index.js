const support = {
    'zh_CN': {
        shortName: 'ZH',
        callName: '简体中文',
        app: require('./zh_CN/app').default,
        seo: require('./zh_CN/seo').default,
        example: require('./zh_CN/example').default
    },
    'en_US': {
        shortName: 'EN',
        callName: 'English',
        app: require('./en_US/app').default,
        seo: require('./en_US/seo').default,
        example: require('./en_US/example').default
    }
}
export default {
    langText: (lang) => {
        try {
            return support[lang]
        } catch (e) {
            throw (e)
        }
    },
    isSupported: (lang) => {
        let keys = Object.keys(support)
        for (let i = 0; i < keys.length; i++) {
            if (lang.indexOf(keys[i]) !== -1) {
                return keys[i];
            }
        }
        return 'zh_CN'
    }
}