const ErrorCode = {
    '3001001': {
        'en_US': '[%m] Successful'
    },
    '3001002': {
        'en_US': '[% m] Database error! % s.'
    },
    '3001003': {
        'en_US': '[%m] Item already exists: %s'
    },
    '3001004': {
        'en_US': '[%m] Item not found'
    },
    '3001005': {
        'en_US': '[%m] Function cannot be used when table is sharded. %s'
    },
    '3001006': {
        'en_US': '[%m] Unknown Error, %s'
    },
    '3001007': {
        'en_US': '[%m] Unique key must be provided. %s'
    },
    '3001008': {
        'en_US': '[%m] affetcedRows must be 1. %s'
    },
    '3001101': {
        'en_US': '[%m] Params error! %s',
        'zh_CN': '参数错误'
    },
    '3001102': {
        'en_US': '[%m] Game server access error. %s',
        'zh_CN': '服务器访问失败'
    },
    '3001103': {
        'en_US': '[%m] Response params format error. %s',
        'zh_CN': '响应格式错误'
    },
    '3001104': {
        'en_US': '[%m] Game server response with error message. %s',
        'zh_CN': '服务器返回错误信息'
    },
    '3001105': {
        'en_US': '[%m] You do not have permission to access this url.',
        'zh_CN': '你没有访问该 url 的权限'
    },
    '3001106': {
        'en_US': '[%m] Authentication Error.',
        'zh_CN': '身份验证失败'
    },
    '3001107': {
        'en_US': '[%m] User has logouted. %s',
        'zh_CN': '用户已经登出'
    },
    '3001108': {
        'en_US': '[%m] System is disable. %s',
        'zh_CN': '系统禁用'
    },
    '3001109': {

        'en_US': '[%m] User account has been frozen. %s',
        'zh_CN': '账号冻结作废'
    },
    '3001110': {

        'en_US': '[%m] Application permission has been changed. %s',
        'zh_CN': '应用功能权限变更'
    },
    '3001111': {

        'en_US': '[%m] User application permission has been changed. %s',
        'zh_CN': '账号功能权限变更'
    },
    '3001112': {

        'en_US': '[%m] User game permission has been changed. %s',
        'zh_CN': '账号游戏权限变更'
    },
    '3001113': {

        'en_US': '[%m] User group permission has been changed. %s',
        'zh_CN': '所属用户组功能权限变更'
    },
    '3001114': {
        'en_US': '[%m] Unable to generate sign with params. %s',
        'zh_CN': '参数格式错误，无法生成签名'
    },
    '3001115': {
        'en_US': '[%m] This news already exists. %s',
        'zh_CN': '该新闻已存在'

    },
    '3001116': {

        'en_US': '[%m] This news does not exist. %s',
        'zh_CN': '该新闻不存在'
    },
    '3001117': {
        'en_US': '[%m] News in this language does not exist. %s',
        'zh_CN': '该语言版本的新闻不存在'
    },
    '3001118': {
        'en_US': '[%m] This message does not exist. %s',
        'zh_CN': '该消息不存在'
    },
    '3001119': {
        'en_US': '[%m] This job does not exist. %s',
        'zh_CN': '该职位不存在'
    },
    '30011120': {
        'en_US': '[%m] Job in this language does not exist. %s',
        'zh_CN': '该语言版本的职位不存在'
    },
    '401': {
        'en_US': 'Authentication failed,please login!',
        'zh_CN': '鉴权失败，请重新登录！'
    },
    '404': {
        'en_US': 'Not Found!',
        'zh_CN': 'Api找不到！'
    },

    /** 2001001 - 2001999 api-gateway 错误码 gmtool 复制过来的errorCode**/
    '2001001': {
        'en_US': 'Successful!',
        'zh_CN': '成功！'
    },
    '2001002': {
        'en_US': 'Database error!',
        'zh_CN': '数据库错误！'
    },
    '2001003': {
        'en_US': 'Item already exists!',
        'zh_CN': '项目已存在！'
    },
    '2001004': {
        'en_US': 'Item not found!',
        'zh_CN': '找不到该道具'
    },
    '2001005': {
        'en_US': 'Function cannot be used when table is sharded!',
        'zh_CN': '当表被切分时，不能使用函数！'
    },
    '2001006': {
        'en_US': 'Unknown Error!',
        'zh_CN': '未知错误！'
    },

    '2001101': {
        'en_US': 'Params error!',
        'zh_CN': '参数错误！'
    },
    '2001102': {
        'en_US': 'Application Id is illegal!',
        'zh_CN': '应用程序id非法！'
    },
    '2001103': {
        'en_US': 'Application name is illegal!',
        'zh_CN': '应用程序名非法！'
    },
    '2001104': {
        'en_US': 'Application alias name is illegal!',
        'zh_CN': '应用程序别名非法！'
    },
    '2001105': {
        'en_US': 'Application url is illegal!',
        'zh_CN': '应用程序网址非法！！'
    },
    '2001106': {
        'en_US': 'Application type is illegal!',
        'zh_CN': '应用程序类型非法！'
    },
    '2001107': {
        'en_US': 'Application game type is illegal!',
        'zh_CN': '应用程序游戏类型非法！'
    },
    '2001108': {
        'en_US': 'Application status is illegal!',
        'zh_CN': '应用程序状态非法！'
    },
    '2001109': {
        'en_US': 'Application function name is illegal!',
        'zh_CN': '应用程序函数名非法！'
    },
    '2001110': {
        'en_US': 'Application function alias name is illegal!',
        'zh_CN': '应用程序函数别名非法！'
    },
    '2001111': {
        'en_US': 'Application function type is illegal!',
        'zh_CN': '应用程序函数类型非法！！'
    },
    '2001112': {
        'en_US': 'Application function status is illegal!',
        'zh_CN': '应用程序函数状态非法！！'
    },
    '2001113': {
        'en_US': 'sourceType is illegal!',
        'zh_CN': '数据类型非法！'
    },
    '2001114': {
        'en_US': 'receiveType is illegal!',
        'zh_CN': '接收类型非法！'
    },
    '2001115': {
        'en_US': 'intervalDay is illegal!',
        'zh_CN': '间隔时间非法！'
    },
    '2001116': {
        'en_US': 'messageState is illegal!',
        'zh_CN': '消息状态非法！！'
    },
    '2001117': {
        'en_US': 'isGlobalSync is illegal!',
        'zh_CN': '全球化非法！！'
    },
    '2001118': {
        'en_US': 'Api sign err!',
        'zh_CN': '验证签名失败，私钥发生更改未及时替换！'
    },
    '2001119': {
        'en_US': 'AccessToken expired!',
        'zh_CN': '登录过期！'
    },
    '2001120': {
        'en_US': 'Params user id err!',
        'zh_CN': '参数用户id错误！'
    },
    '2001121': {
        'en_US': 'AccountType err!',
        'zh_CN': '账户类型错误！'
    },
    '2001122': {
        'en_US': 'The third party check token err!',
        'zh_CN': '第三方检查令牌错误！'
    },
    '2001123': {
        'en_US': 'Not found account id!',
        'zh_CN': '找不到账户id！'
    },
    '2001124': {
        'en_US': 'Can not be guest accountType',
        'zh_CN': '不能是访客的账户类型！'
    },
    '2001125': {
        'en_US': 'ST expired!',
        'zh_CN': 'ST过期！'
    },
    '2001126': {
        'en_US': 'TGT expired, please login!',
        'zh_CN': 'TGT过期，请重新登录！'
    },
    '2001127': {
        'en_US': 'memSet false!',
        'zh_CN': 'mem设置错误！'
    },
    '2001128': {
        'en_US': 'Data collection error!',
        'zh_CN': '数据库连接失败！'
    },
    '2001129': {
        'en_US': 'Unable to generate sign with params!',
        'zh_CN': '无法使用参数生成签名！'
    },
    '2001130': {
        'en_US': 'Sign has expired, please generate sign with new timestamp!',
        'zh_CN': '签名已过期，请用新的时间戳生成！'
    },

    /** 2009001 - 2009999 ms-gmtool 错误码**/
    '2009001': {
        'en_US': 'Successful!',
        'zh_CN': '成功！'
    },
    '2009002': {
        'en_US': 'Database error!',
        'zh_CN': '数据库错误！'
    },
    '2009003': {
        'en_US': 'Item already exists!',
        'zh_CN': '已存在！'
    },
    '2009004': {
        'en_US': 'Item not found!',
        'zh_CN': '找不到该道具'
    },
    '2009005': {
        'en_US': 'Function cannot be used when table is sharded!',
        'zh_CN': '当表被切分时，不能使用函数！'
    },
    // '2009006': {
    //   'en_US': 'Unknown Error!',
    //   'zh_CN': '未知错误！',
    // },

    '2009101': {
        'en_US': 'This publishType can not edit!',
        'zh_CN': '发布类型不能被编辑！'
    },
    '2009102': {
        'en_US': 'Game server access error!',
        'zh_CN': '游戏服务器访问失败！'
    },
    '2009103': {
        'en_US': 'Response params format error!',
        'zh_CN': '响应格式错误！'
    },
    '2009104': {
        'en_US': 'Game server response with error message!',
        'zh_CN': '游戏服务器返回错误信息！'
    },
    '2009105': {
        'en_US': 'Unable to generate sign with params!',
        'zh_CN': '无法使用这些参数生成签名！'
    },
    '2009106': {
        'en_US': 'languageUsedIds array must contain 1!',
        'zh_CN': '已使用语言列表id必须包含1！'
    },
    '2009107': {
        'en_US': 'Message does not exist!',
        'zh_CN': '消息不存在！'
    },
    '2009108': {
        'en_US': 'Editable deadline passed. Message cannot be disabled!',
        'zh_CN': '已过编辑时限，消息不能被禁用！'
    },
    '2009109': {
        'en_US': 'Editable deadline passed. Message cannot be enabled!',
        'zh_CN': '已过编辑时限，消息不能被启用！'
    },
    '2009110': {
        'en_US': 'Convert timeStr to timestamp error!',
        'zh_CN': '转换时间戳发生错误！'
    },

    '2009111': {
        'en_US': 'Cannot find message!',
        'zh_CN': '找不到该消息！'
    },
    '2009112': {
        'en_US': 'Cannot find jobVersion!',
        'zh_CN': '找不到该版本！'
    },
    '2009113': {
        'en_US': 'Cannot get white list!',
        'zh_CN': '找不到白名单！'
    },
    '2009114': {
        'en_US': 'Cannot add ip to white list!',
        'zh_CN': '不能将该ip添加到白名单！'
    },
    '2009115': {
        'en_US': 'Cannot remove ip from white list!',
        'zh_CN': '不能将该ip移出白名单！'
    },
    '2009116': {
        'en_US': 'Current char not in CHARS_TO_GEN_RANDOM_STR!',
        'zh_CN': '当前字符不在规定范围之内！'
    },
    '2009117': {
        'en_US': 'ActivationCode does not exist!',
        'zh_CN': '激活码不存在！'
    },
    '2009118': {
        'en_US': 'ActivationCode is being generated, please wait!',
        'zh_CN': '激活码正在创建中，请稍候！'
    },
    '2009119': {
        'en_US': 'Fail to generate ctivationCode, please try again!',
        'zh_CN': '无法生成ctivation代码,请重试！'
    },
    '2009120': {
        'en_US': 'PackageBatch has not started yet or has expired!',
        'zh_CN': '批处理未启动或已过期！'
    },
    '2009121': {
        'en_US': 'Current packageBatch is not available in this server!',
        'zh_CN': '当前批处理在服务器中不可用！'
    },
    '2009122': {
        'en_US': 'Message is disabled!',
        'zh_CN': '消息已关闭！'
    },
    '2009123': {
        'en_US': 'User has used the activationCode!',
        'zh_CN': '该激活码已使用！'
    },
    '2009124': {
        'en_US': 'Message can only be edit when it is unpublished!',
        'zh_CN': '消息只能在未发布时进行编辑！'
    },
    '2009125': {
        'en_US': 'PublishCode error, message cannot be published!',
        'zh_CN': '发布码错误，不能发布消息！'
    },
    '2009126': {
        'en_US': 'Multiple package can not add activation!',
        'zh_CN': '该礼包类型不能添加激活码！'
    },
    '2009127': {
        'en_US': 'PackageName has already existed!',
        'zh_CN': '礼包名称已存在！'
    },
    '2009128': {
        'en_US': 'publishName has already existed!',
        'zh_CN': '名称已存在！'
    },
    '2009129': {
        'en_US': 'publishCode has already existed!',
        'zh_CN': '编号已存在！'
    },
    '2009130': {
        'en_US': 'playerModelName has already existed',
        'zh_CN': '名称已存在!'
    },
    '2009131': {
        'en_US': 'playerModelCode has already existed',
        'zh_CN': '编号已存在!'
    },
    '2009132': {
        'en_US': 'message has been published',
        'zh_CN': '消息已被发布!'
    },
    '2009133': {
        'en_US': 'Publish code has been disabled',
        'zh_CN': '发布方式已被他人更改，请查看配置，或选择其他发布方式重新创建!'
    },
    '2009134': {
        'en_US': 'Message is being edited',
        'zh_CN': '消息正在被修改，请5s后重试!'
    },
    '2009008': {
        'en_US': 'affetcedRows must be 1',
        'zh_CN': '该项目不存在，请刷新列表重试!'
    },
    // 基础服务复制过来的errorCode
    /** 10001 - 10050 System Common Error**/
    '10001': {
        'en_US': 'Error!',
        'zh_CN': '错误'
    },
    '10010': {
        'en_US': 'Invalid config path!',
        'zh_CN': '无效的配置路径'
    },
    '10011': {
        'en_US': 'ConfigHelper Instance has not initialized!',
        'zh_CN': 'ConfigHelper 实例没有初始化'
    },
    '10012': {
        'en_US': 'TracerHelper Instance has not initialized!',
        'zh_CN': 'TracerHelper 实例尚未初始化'
    },
    '10021': {
        'en_US': 'ModuleOption does not exist!',
        'zh_CN': 'ModuleOption 不存在'
    },
    '10022': {
        'en_US': 'ModuleOption\'s version dose not exist!',
        'zh_CN': 'ModuleOption 版本不存在'
    },
    '10031': {
        'en_US': 'Database type not found!',
        'zh_CN': '数据库类型未找到'
    },
    '10032': {
        'en_US': 'Database config not found!',
        'zh_CN': '数据库配置未找到'
    },
    '10033': {
        'en_US': 'Data collection error',
        'zh_CN': '数据库连接错误'
    },
    /** 10051 - 10100 Gateway Logic Error**/
    '10051': {
        'en_US': ' Api sign err!',
        'zh_CN': '验证签名失败，私钥发生更改未及时替换'
    },
    '10052': {
        'en_US': 'AccessToken expired!',
        'zh_CN': '登录过期'
    },
    '10053': {
        'en_US': 'Params user id err!',
        'zh_CN': '参数用户id错误'
    },
    '10054': {
        'en_US': 'AccountType err!',
        'zh_CN': '账户类型错误'
    },
    '10055': {
        'en_US': 'The third party check token err!',
        'zh_CN': '第三方检查令牌错误'
    },
    '10056': {
        'en_US': 'Not found account id!',
        'zh_CN': '找不到账户id'
    },
    '10057': {
        'en_US': 'Can not be guest accountType',
        'zh_CN': '不能是访客的账户类型'
    },
    '10058': {
        'en_US': 'ST expired!',
        'zh_CN': 'ST过期'
    },
    '10059': {
        'en_US': 'TGT expired, please login!',
        'zh_CN': 'TGT过期，请重新登录'
    },
    '10060': {
        'en_US': 'memSet false!',
        'zh_CN': 'mem设置错误'
    },
    '2005105': {
        'en_US': '[%m] Application Url access error. %s',
        'zh_CN': '应用接口访问失败'
    },

    /** 30051 - 30100 User Logic Error**/
    '30051': {
        'en_US': 'Create user error!',
        'zh_CN': '创建用户失败'
    },
    '30052': {
        'en_US': 'User not exist! userName',
        'zh_CN': '你填写的帐号或密码不正确，请再次尝试'
    },
    '30053': {
        'en_US': 'User password error! userName',
        'zh_CN': '你填写的帐号或密码不正确，请再次尝试'
    },
    '30054': {
        'en_US': 'UserModel findOne error!',
        'zh_CN': '用户模型存在多个'
    },
    '30055': {
        'en_US': 'UserModel save error!',
        'zh_CN': '用户模型保存失败'
    },
    '30056': {
        'en_US': 'UserBindMailModel findOne error!',
        'zh_CN': '用户模型错误'
    },
    '30057': {
        'en_US': 'UserStatus Error',
        'zh_CN': '账号非法，请您尝试使用其他账号登录'
    },

    /** 31001 - 32000 Game Logic Error**/
    '31001': {
        'en_US': 'Not found game id!',
        'zh_CN': '没有找到游戏id'
    },
    '31002': {
        'en_US': 'Create guid error!',
        'zh_CN': '创建guid失败'
    },
    '31003': {
        'en_US': 'Create guid bind error!',
        'zh_CN': 'guid绑定失败'
    },
    '31004': {
        'en_US': 'Update session error!',
        'zh_CN': '更新session错误'
    },
    '31005': {
        'en_US': 'Guid bound to other account!',
        'zh_CN': 'guid已被绑定'
    },
    '31006': {
        'en_US': 'Not found guid',
        'zh_CN': '没有找到guid'
    },
    '31007': {
        'en_US': 'Not found guest guid',
        'zh_CN': '没有找到访客guid'
    },
    '31008': {
        'en_US': 'Guid no guest! ',
        'zh_CN': '没有该访客'
    },
    '31009': {
        'en_US': 'AccountType is guest!',
        'zh_CN': '是访客账户'
    },
    '31010': {
        'en_US': 'Old account no bind!',
        'zh_CN': '旧账户没有绑定'
    },
    '31011': {
        'en_US': 'SessionId err!',
        'zh_CN': 'SessionId 错误'
    },

    /** 2005001 - 2006000 Permission Error**/
    '2005001': {
        'en_US': 'Application\'s url not exist!',
        'zh_CN': '应用地址不存在'
    },
    '2005002': {
        'en_US': 'Create applicaiton error!',
        'zh_CN': '添加应用失败!'
    },
    '2005003': {
        'en_US': 'Create application manager group error!',
        'zh_CN': '添加应用管理者用户组失败!'
    },
    '2005004': {
        'en_US': 'Update applicaiton error!',
        'zh_CN': '更新应用失败!'
    },
    '2005005': {
        'en_US': 'Update application manager group error!',
        'zh_CN': '更新应用管理者用户组的创建者失败!'
    },
    '2005006': {
        'en_US': 'Create application has existed!',
        'zh_CN': '添加应用已存在!'
    },
    '2005007': {
        'en_US': 'Database doesn\'t exist!',
        'zh_CN': '数据库不存在!'
    },
    '2005008': {
        'en_US': 'Application doesn\'t exist!',
        'zh_CN': '应用不存在!'
    },
    '2005009': {
        'en_US': 'Update application manager group doesn\'t exist!',
        'zh_CN': '更新应用管理者用户组不存在!'
    },
    '2005010': {
        'en_US': 'Enable or disable application error!',
        'zh_CN': '启用或禁用应用失败!'
    },
    '2005011': {
        'en_US': 'AppId not pass!',
        'zh_CN': 'appId未传!'
    },
    '2005012': {
        'en_US': 'AppName not pass!',
        'zh_CN': 'appName未传!'
    },
    '2005013': {
        'en_US': 'Update applicaiton private key error!',
        'zh_CN': '更新privateKey失败!'
    },
    '2005014': {
        'en_US': 'Get application type error, appId not base server!',
        'zh_CN': '获取应用类别，需基础服务AppId!'
    },
    '2005015': {
        'en_US': 'Get application type doesn\'t exist!',
        'zh_CN': '获取应用类别不存在数据!'
    },
    '2005016': {
        'en_US': 'Application group doesn\'t exist!',
        'zh_CN': '应用的用户组不存在!'
    },
    '2005017': {
        'en_US': 'Create permisssion has existed!',
        'zh_CN': '功能权限已存在!'
    },
    '2005018': {
        'en_US': 'Create permisssion error!',
        'zh_CN': '创建功能权限失败!'
    },
    '2005019': {
        'en_US': 'Update permisssion doesn\'t exist!',
        'zh_CN': '功能不存在!'
    },
    '2005020': {
        'en_US': 'Update permisssion error!',
        'zh_CN': '更新功能权限失败!'
    },
    '2005021': {
        'en_US': 'Enable or disable permisssion error!',
        'zh_CN': '启用或禁用功能失败!'
    },
    '2005022': {
        'en_US': 'Application already exists!',
        'zh_CN': '应用已存在!'
    },
    '2005023': {
        'en_US': 'Group not found!',
        'zh_CN': '找不到用户组'
    },
    '2005024': {
        'en_US': 'More than 2 admins are set!',
        'zh_CN': '设置超过2个以上管理员!'
    },
    '2005025': {
        'en_US': 'System admin is not allowed to be set!',
        'zh_CN': '不允许设置系统管理员!'
    },
    '2005026': {
        'en_US': 'request url must not be empty!',
        'zh_CN': '请求url不能为空!'
    },
    '2005027': {
        'en_US': 'logout request returns error response!',
        'zh_CN': '注销请求返回错误!'
    },
    '2005028': {
        'en_US': 'UserGroup Name already exist!',
        'zh_CN': '用户组已存在!'
    },
    '2008003': {
        'en_US': 'frozen user already exist!',
        'zh_CN': '存在被冻结用户!'
    },
    '2008004': {
        'en_US': 'disused user already exist!',
        'zh_CN': '存在被废弃用户!'
    },
    '2001010': {
        'en_US': 'Application function alias name does not legal!',
        'zh_CN': '别名必须是2-20位英文和数字的组合!'
    }

}
const UnknowError = {
    'en_US': 'Unknow Error',
    'zh_CN': '未知错误'
}
const ErrorMsg = (code, language) => {
    let lang = language || 'zh_CN'
    if (code && ErrorCode.hasOwnProperty(code)) {
        return ErrorCode[lang] || ''
    } else {
        return UnknowError[lang]
    }
}

export default ErrorMsg