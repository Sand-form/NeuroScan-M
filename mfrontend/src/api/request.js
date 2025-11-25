// src/api/request.js
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:8005', // 替换成你的后端地址
    timeout: 5000
})

export default request