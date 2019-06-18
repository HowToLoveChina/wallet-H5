import axios from 'axios'
import router from '@/router'

let baseUrl = 'http://admin.truewallet.net/api/api2'
axios.defaults.baseURL = baseUrl

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          router.replace({ path: '/' })
          break
        case 403:
          router.replace({ path: '/' })
          break
        case 404:
          router.replace({ path: '/' })
          break
        // 其他错误，直接抛出错误提示
        default:
          router.replace({ path: '/' })
      }
      return Promise.reject(error.response)
    }
  }
)

export default {
  get (url, params, headers) {
    return axios({
      headers: headers || null,
      method: 'get',
      params,
      url
    })
  },
  post (url, data, headers) {
    return axios({
      headers: headers || null,
      method: 'post',
      params: data,
      url
    })
  }
}
