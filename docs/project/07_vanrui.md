---
title: 智慧通行iot平台
date: '2018-03-01'
type: 项目经验
tags: IOT
note: 该项目是统管全国各房产项目中各个人脸识别设备的管理平台。
---
#  智慧通行iot平台

2018/3-2020/3

## 项目描述：

该项目是统管全国各房产项目中各个人脸识别设备的管理平台。

包括
1. 智慧通行云iot平台，微服务架构，使用技术，springboot duboo zookeeper mybatis-plus netty redis rabbitmq
2. 边缘端服务程序ldm，单体程序，使用技术：spingboot netty mybatis-plus，接入项目端所有人脸设备，如海康人脸设备、宇视人脸设备、塔吊人脸设备、超脑等
3. 其他辅助程序：
    * 云端crm同步程序，使用net core技术，部署于centos运行。
    * ldm安装程序，tomcat、redis、mysql、watchdog、ldm等一整套软件的部署方案。
## 责任描述：
1. 参与少量的平台端开发。
2. 分担边缘端1/3的开发工作。
3. 独立完成辅助程序的开发。