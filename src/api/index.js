import http from './http'

// 登录
const login = params => {
  return http.get('/getMessageNum', params)
}
// 获取行为验证码
const generate = params => {
  return http.post('/generate', {params})
}
export {
  login,
  generate
}
