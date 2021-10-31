import axios from 'axios';
import { getToken, setToken, delToken } from './index';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 500000,
});

instance.interceptors.request.use(function(request) {
  if (getToken()) {
    request.headers['Authorization'] = 'Bearer ' + getToken();
  }
  return request;
}, function(error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function(response) {
  if (response.data.token) {
    setToken(response.data.token);
  }
  // 对响应数据做点什么
  return response.data;
}, function(error) {
  // 对响应错误做点什么
  if (error.response.status === 401) {
    delToken();
    return window.location.href = 'login.html';
  }
  return Promise.reject(error);
});

export default instance;