[教程请点这里](https://zhuzhaohua.com/technology/vue/20190915_myblog.html)


## 克隆至本地

## 安装依赖：
```
yarn 
```

## 注册并填写 评论组件所需要的key
参见[云淡风轻](https://ioliu.cn/2017/add-valine-comments-to-your-blog/)

在.vuepress/components/Valine.vue中修改appId和appKey
```
    new Valine({
      el: '#vcomments' ,
      appId: '',// your appId
      appKey: '', // your appKey
      notify:true, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'just go go' 
    });
```

## 背景音乐
* .vuepress/public/mp3 中 放入喜欢的MP3文件(请支持正版！)
* 在.vuepress/components/Mp3Player.vue 中 修改文件路径


## 运行
```
npm run dev
```

## 编译
```
npm run build
```

## 部署

### 创建 Nginx Config配置文件

在项目根目录下创建 `nginx` 文件夹，该文件夹下新建文件`default.conf`：
```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
} 
```

该配置文件定义了首页的指向为 `/usr/share/nginx/html/index.html`，所以我们可以一会把构建出来的 `index.html` 文件和相关的静态资源放到 `/usr/share/nginx/html` 目录下。

### 创建 Dockerfile 文件
```
FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
```

- 自定义构建镜像的时候基于 Dockerfile 来构建。
- FROM nginx 命令的意思该镜像是基于 nginx:latest 镜像而构建的。
- COPY dist/ /usr/share/nginx/html/ 命令的意思是将项目根目录下 dist 文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下。
- COPY nginx/default.conf /etc/nginx/conf.d/default.conf 命令的意思是将 Nginx 目录下的 default.conf 复制到 etc/nginx/conf.d/default.conf，用本地的 default.conf 配置来替换 Nginx 镜像里的默认配置。

### 基于该 Dockerfile 构建 Vue 应用镜像

* 前置条件
  * 本地安装了git
  * 本地安装了npm/nodejs
  * 本地安装了docker
    ```
    choco install docker-cli
    ```
* 运行命令（注意不要少了最后的 “.” ）
```
docker build -t zejevuenginxcontainer .
```

### 腾讯云配置

* 安全组
  * 新建安全组
    * 模板：放通22，80，443，3389端口和ICMP协议
    * 名称：zeje
    * 所属项目：默认项目
    * 备注：公网放通云主机常用登录及web服务端口，内网全放通。
  * 修改规则
    * 入站规则
      * 添加规则：4000端口、8080端口
    * 出站规则
      * 一键放行
  * 关联实例

