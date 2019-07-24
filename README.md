# REACT-MIN-STARTUP
本项目提供最小集的react-web-app开发的初始脚本配置、目录结构、基本功能
- 自定义react栈，无脑使用react-create-script只是很好适合开始使用
- 减少重复工作，提升web构建工程效率
- 提供基本的集成功能如`antd` `echarts` `hotload`等等，其他能力慢慢集成进来，后续只需要按需增减
- 本文档记录如何一步一步构建一个最小的基础的react-web-app

# webpack

# babel

# hot-load
## hot-load doc
https://webpack.docschina.org/api/hot-module-replacement
## use hot-loader react-dom
https://github.com/gaearon/react-hot-loader

# react
## quick lookinto react
> https://codepen.io/gaearon/pen/gWWZgR?editors=0010

# redux
## install step
> https://react-redux.js.org/introduction/quick-start

`yarn add react-redux`
## redux-async

# eslint
尽量符合百度js的代码规范，在代码开发阶段就能够检测出来一些代码风格问题，防止cr后才去修改，保持良好的代码书写风格


# react-router
1. 这里考虑使用基于history的router
2. 基于webpack dev server 的historyApiFallback，可以保证刷新后仍然能够正常展示
3. router参数获取


#TODO
- antd
- echarts
