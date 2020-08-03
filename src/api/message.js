
// 留言相关接口

import request from '@/utils/request'

// 提交留言
export function postMessage(data) {
  return request({
    url: 'api/web/message',
    method: 'post',
    data
  })
}