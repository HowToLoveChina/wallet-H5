import http from './http'

// 登录
const login = params => {
  return http.get('/getMessageNum',params)
}
export {
  login
}
