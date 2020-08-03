
// 新闻相关接口

import request from '@/utils/request'

// 获取新闻分类
export function getNewsType(params) {
  return request({
    url: 'api/web/type',
    method: 'get',
    params
  })
}

// 获取新闻列表
export function getNewsList(params) {
  return request({
    url: 'api/web/news',
    method: 'get',
    params
  })
}

// 获取新闻详情
export function getNews(id) {
  return request({
    url: 'api/web/news',
    method: 'get',
    params: {
      id
    }
  })
}

// 获取党建阵地列表
export function getPartyNewsList(params) {
  return request({
    url: 'api/web/news?typeId=1',
    method: 'get',
    params
  })
}