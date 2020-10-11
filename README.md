# 番茄土豆闹钟
> 仿[番茄土豆](https://pomotodo.com/app/)的线上webApp

## 前言

1. 这次项目重点体验typescript与react的结合，直接使用官方脚手架create-react-app搭建环境。
2. 项目中数据统计图形使用HTML5的SVG展示。
3. 项目采用前后端分离开发模式。后端接口需要appkey才可以使用。

### 项目地址
 [番茄土豆闹钟](https://github.com/JaniceZD/potato-demo-test)
 [预览](https://janicezd.github.io/potato-demo-test/)
 
## 实现功能
1. 简单用户系统---登陆/注册/跳转页面
2. 番茄闹钟---默认25分钟定时闹钟，用户也也可以自定义时间间隔
3. 历史任务---有详细的历史任务记录，并可自行恢复和删除。
4. 数据统计
    - 番茄历史统计---每日记录
    - 待办任务统计---每日记录

## 技术栈
- react
- react-router
- redux、react-redux
- ant-d
- typescript
- scss
- axios

## 实现细节
1. 封装 axios，生成实例。使用拦截器处理后端传来的token
2. 使用 React-Redux 全局管理待办任务和番茄记录：tomatoes储存处理番茄闹钟的数据，todos储存处理待办任务的数据。
3. 使用 Hooks API 完成番茄闹钟倒计时的功能模块。
4. 这次项目的数据统计图---折线图使用SVG来展示，SVG相比canvas，它不依赖分辨率，是基于矢量的图像，因此即使在放大或改变尺寸的情况下也不会失真。
