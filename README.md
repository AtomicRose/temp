# Shinezone-WEB-OfficialSite-Client
炫踪官网，支持PC端，移动端

## 项目说明

### 开发说明，请见下面使用框架说明

### 项目配置
#### hosts配置

`config/hosts.js`

hosts配置了项目中所用到的相关域名信息，包括接口、本地静态文件的domain等。请根据不同的部署环境填写不同的值

`server/server.js`

该文件为服务端渲染启动文件。请在部署前，确定服务所使用的端口号(7001)。部署时请使用pm2运行。你也可以直接运行`package.json`中的命令

### 项目部署

* Step 1

`git clone` or `git pull` 拉取代码到本地

* Step 2

先后执行`npm run build-xxx`和`npm run start-xxx`，此时服务已经启动。

* Step 3

配置nginx反向代理

```shell
# gzip setting
gzip  on;
gzip_min_length 1k;
gzip_comp_level 2;
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
gzip_vary on;
gzip_disable "MSIE [1-6]\.";

server {
    listen 80;
    # if you use ssl
    # listen 443;


    # ssl setting

    location / {
        # The port you setting at server/server.js 
        proxy_pass http://localhost:xxx 
    }
}
```

* Other tip

如果你在test或者alpha环境，可能需要配置本机访问的hosts域名。或者联系网管配置路由映射

qa环境：

172.16.0.213 qa-officialsite-client.shinezone.com

172.16.0.213 os-qa-officialsite.shinezone.com

## 使用框架
`Shinezone-WEB-ReactFramework Version 1.0.0`


# Shinezone-WEB-ReactFramework

The framework used react, nextjs, mobx. Also you can use antd.

## version 1.0.0

## How to run the framework

### Step One

Clone or download the source.

### Step Two

Go to the root directory and run `npm install`

### Step Three

Run the command `pm2 start ecosystem.config.js`

## More operations

* `npm run build-xx` compile the source before you start the server.
* `npm run start-xx` start the server from the compiled source.

## Config the application
### Compile file
You can edit all compile configs in this file `next.config.js`. In fact, it includes much webpack configs. Yep, you can setting the application compile configs as the same as `webpack.config.js`

### Set alias
The webpack includes much usefull plugins. One of these, you can set the alias in config file. Then you can use it instead the relative path string like `./../../` when you import modules.

### Running environment
The application has 4 kinds of running environments.
* `__PROD__` production
* `__ALPHA__` alpha, this environment is same to the production env. Except the route hosts
* `__TEST__` test, for testing
* `__DEV__` development, when you are developing, you should use this environment

These environments will be used in anyone module file if you need. And you just need to set the env in server shell. In this application, you can set in `package.json`

For example, `config/hosts.js`. Usually, we will edit the api hosts in this file. But you will find this problem. If I want to deploy the application, I must to modify the hosts file which instead of by production host(domain) and when I want to test I must to modify the hosts file again.

So, we can compile different source code through the environment parameter.

### Product directory
```
|_API                       // all the ajax request should list in this directory
|_config                    // application config files
|_dist                      // compiled code
|_pages                     // all the react pages
    |_components            // react-components. 
    |_layout                // application layout files
    |_scss                  // styles
    |_widgets               // react-widgets
|_server                    // server-side-render, route
|_store                     // mobx store
|_utils                     // some usefull modules
|_static                    // static files
```

## How to use the ant-design

* `npm install --save-antd`
* `import {Button} from 'antd'`

There is a problem about the antd style import. So we copy the css file to `static/antd.css`. Then, in the file `pages/_documents.js` we can find 
``` html
 {/* -----Here is the antd css------ */}
<link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/antd.css`} />
```
if you would not use antd, please delete it.