import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(config => {
    console.log(config);
    Toast.loading('加载中...')
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(config => {
    Toast.hide()
    return config
}, err => {
    Toast.hide()
    return Promise.reject(err)
})
