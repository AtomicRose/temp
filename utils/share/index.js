let Share = (info) => {
    if (!info || !info.url || !info.title) {
        return false
    }
    let res = null
    let siteName = info.siteName || 'Shinezone'
    let title = info.title || ''
    let description = info.description || ''
    let imageUrl = encodeURIComponent(info.imageUrl || '')
    let from = info.from || 'website'
    let url = encodeURIComponent(info.url || '')
    let weiboAppKey = info.weiboAppKey || ''
    let facebookAppId = info.facebookAppId || ''
    let domain = info.domain || 'www.shinezone.com'
    let twitterCreator = info.twitterCreator || 'Shinezone'

    res = {
        weibo: {
            head: null,
                href: `http://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${imageUrl}&appkye=${weiboAppKey}`
        },
        facebook: {
            head: [
                {
                    property: 'og:site_name',
                    content: siteName
                },
                {
                    property: 'og:title',
                    content: title
                },
                {
                    property: 'og:type',
                    content: from
                },
                {
                    property: 'og:description',
                    content: description
                },
                {
                    property: 'og:image',
                    content: imageUrl
                },
                {
                    property: 'og:url',
                    content: url
                }
            ],
            href: `https://www.facebook.com/sharer/sharer.php?u=${url}`
        },
        twitter: {
            head: [
                {
                    name: 'twitter:site',
                    content: `@${siteName}`
                },
                {
                    name: 'twitter:domain',
                    content: domain
                },
                {
                    name: 'twitter:title',
                    content: title
                },
                {
                    name: 'twitter:image:src',
                    content: decodeURIComponent(imageUrl)
                },
                {
                    name: 'twitter:creator',
                    content: twitterCreator
                },
                {
                    name: 'twitter:description',
                    content: description
                }
            ],
            href: `https:/twitter.com/intent/tweet?url=${url}&text=${title}&via=${twitterCreator}`
        }
    }
    return res
}


export default Share