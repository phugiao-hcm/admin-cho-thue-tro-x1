import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.kongricsstudio.com', // đổi thành API backend của bạn
  timeout: 10000,
})

// Interceptor cho request (thêm token nếu có)
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Interceptor cho response (bắt lỗi chung)
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error('API Error:', error)
    return Promise.reject(error)
  },
)

export default api
