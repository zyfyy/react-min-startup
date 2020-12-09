# REACT-MIN-STARTUP

本项目提供最小集的 react-web-app 开发的初始脚本配置、目录结构、基本功能

- 自定义 react 栈，无脑使用 react-create-script 只是很好适合开始使用
- 减少重复工作，提升 web 构建工程效率
- 提供基本的集成功能如`antd` `echarts` `hotload`等等，其他能力慢慢集成进来，后续只需要按需增减
- 本文档记录构建健壮的 react-web-app 的最小实践

# webpack

## feature

- 支持 typescript
- 根据环境不同，设置不同配置执行
- hotload 使用 react refresh 弃用 原来的`react-hot-loader`，暂无实现前后端一体 server
- 支持 sourcemap
- 根路径 alias
- css module(目前为 auto)
- postcss postcss 更多插件了解中

## 优化

- 升级至 webpack5 使用 cache 加速构建启动速度
- splitChunk 弃用动态库

# react

update to react17

- use hoc
- use render prop
- context

# redux

- redux-thunk support
- redux-saga support

# react-router

1. 这里考虑使用基于 history 的 router
2. 基于 webpack dev server 的 historyApiFallback，可以保证刷新后仍然能够正常展示
3. router 参数获取

# 集成更多优秀的类库、思想、框架、设计理念

1. hooks

   - huse `//TODO`

2. ui

   - form 相关 `//TODO`
   - echarts `//TODO`
   - d3 `//TODO`
