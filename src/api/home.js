import request from '@/utils/request'

export function reqHomeList () {
  return request({
    url: '/api',
    method: 'GET'
  })
}
