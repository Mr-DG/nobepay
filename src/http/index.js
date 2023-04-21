import axios from 'axios'
import router from '@/router/index'
// 默认配置
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ADDRESS,
  timeout: 6000,
  headers: { 'Content-Type': 'application/json' }
})

// 响应前
instance.interceptors.request.use(config => {
  if (!['/login', '/captchaImage'].includes(config.url)) {
    config.headers.token = window.localStorage.getItem('token') || ''
  }
  return config
}, (err) => {
  // 请求错误
  console.log('请求错误');
  return Promise.reject(err)
})

// 响应后
instance.interceptors.response.use(response => {
  const { status, data, data: { code } } = response
  if (status === 200 && code !== 401) {
    return data
  } else {
    localStorage.removeItem('token')
    return router.push('/login')
  }
}, err => {
  // 响应错误
  console.log('响应错误');
  window.$message.error('请求超时')
  return Promise.reject(err)
}
)
export default instance
