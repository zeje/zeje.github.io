# 安装nodejs

# yum install nodejs

# 安装 yum

# sudo yum install -y git

# 安装vuepress

# npm install -g vuepress

# 拉取源码

# git clone https://github.com/zeje/zeje.github.io.git

# 切换目录

# cd /root/zeje.github.io

# 拉取最新代码
git pull origin master

# 构建
vuepress build

# 重启nginx

nginx -s reload
