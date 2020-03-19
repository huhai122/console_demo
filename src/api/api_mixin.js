/*
 * @Description:
 * @Author: Eleven.Yi
 * @Date: 2020-01-14 17:09:18
 * @LastEditTime : 2020-01-14 19:25:09
 */
import { newRequest } from './index';

export default {
  methods: {
    /**
     * new Request
     */
    // 异步get方法
    async getAjax(apiUrl, vm, headers) {
      const res = await newRequest.getAsync(`${apiUrl}`, vm, headers);
      if (res.hasError) return false;
      return res;
    },
    // 异步用户数据post方法
    async postAjax(apiUrl, vm, headers) {
      const res = await newRequest.postAsync(`${apiUrl}`, vm, headers);
      if (res.hasError) return false;
      return res;
    },

    // 异步用户数据post方法
    async postAjaxWithBaseUrl(apiUrl, vm, headers, baseUrl) {
      const res = await newRequest.postAsync(`${apiUrl}`, vm, headers, baseUrl);
      if (res.hasError) return false;
      return res;
    },

    // 用户数据delete方法
    async deleteAjax(apiUrl, vm, headers) {
      const res = await newRequest.deleteAsync(`${apiUrl}`, vm, headers);
      if (res.hasError) return false;
      return res;
    },
    // 用户数据异步put方法
    async putAjax(apiUrl, vm, headers) {
      const res = await newRequest.putAsync(`${apiUrl}`, vm, headers);
      if (res.hasError) return false;
      return res;
    },
    // 异步get方法
    async customAjax(apiUrl, vm, headers) {
      const res = await newRequest.getAsync(`${apiUrl}`, vm, headers, window.OLD_API_HOST);
      if (res.hasError) return false;
      return res;
    },
  },
};
