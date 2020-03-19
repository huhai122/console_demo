/* eslint-disable no-param-reassign */
/*
 * @Description:
 * @Version:
 * @LastEditors  : Please set LastEditors
 * @Author: Eleven.Yi
 * @Date: 2019-11-20 16:28:14
 * @LastEditTime : 2020-01-15 15:50:42
 */
import axios from 'axios';
import toastMessage from '@/plugins/ToastMessage';

function errorCreate(msg) {
  toastMessage({ message: msg, time: 3000 });
}

// const baseUrl = null;
// const baseAPIURL = baseUrl || '//admintest.fosunholiday.com';
const baseAPIURL = process.env.VUE_APP_API_BASE_URL;

// 创建一个 axios 实例
const service = axios.create({
  baseURL: baseAPIURL,
  timeout: 10000, // 请求超时时间
  headers: {
    version: '1.0',
  },
  // withCredentials: true // 携带cookie
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('folidayMallToken')) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${localStorage.getItem('folidayMallToken')}`;
    }
    return config;
  },
  error =>
    // store.dispatch('foliday/page/set', { key: 'loadStatus', val: false });
    // 发送失败
    // loadingInstance.close();
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error)
  ,
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // loadingInstance.close();
    // dataAxios 是 axios 返回数据中的 data
    // store.dispatch('foliday/page/set', { key: 'loadStatus', val: false });
    const dataAxios = response.data;
    // 根据success判断
    // return dataAxios
    if (!dataAxios.hasError) {
      return dataAxios;
    }
    errorCreate(dataAxios.errorMessage || dataAxios.message);
    return dataAxios;
    // return Promise.reject("哎呀，服务器出了点小问题")
  },
  (error) => {
    // loadingInstance.close();
    // store.dispatch('foliday/page/set', { key: 'loadStatus', val: false });
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break;
        case 401: error.errorMessage = '未授权，请登录';
          // redirectLogin();
          break;
        case 403: error.message = '拒绝访问'; break;
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
        case 408: error.message = '请求超时'; break;
        case 500: error.message = '服务器内部错误'; break;
        case 501: error.message = '服务未实现'; break;
        case 502: error.message = '网关错误'; break;
        case 503: error.message = '服务不可用'; break;
        case 504: error.message = '网关超时'; break;
        case 505: error.message = 'HTTP版本不受支持'; break;
        default:
          toastMessage('哎呀，服务器开小差了~');
          break;
      }
    }
    // errorLog(error)
    return Promise.reject(error);
  },
);

const newRequest = {
  // 异步get方法
  async getAsync(apiUrl, vm, header, baseUrl) {
    return service({
      method: 'get',
      url: apiUrl,
      params: vm,
      headers: header || null,
      baseURL: baseUrl || baseAPIURL,
    });
  },
  // 异步post方法
  async postAsync(apiUrl, params, header, baseUrl) {
    return service({
      method: 'post',
      url: apiUrl,
      data: params,
      headers: header || null,
      baseURL: baseUrl || baseAPIURL,
    });
  },
  // 异步put方法
  async putAsync(apiUrl, params, header) {
    return service({
      method: 'put',
      url: apiUrl,
      data: params,
      headers: header || null,
    });
  },
  // 异步delete方法
  async deleteAsync(apiUrl, params, headers) {
    return service({
      method: 'delete',
      data: params,
      headers: headers || null,
      url: apiUrl,
    });
  },
};

export {
  newRequest,
};

export default service;
