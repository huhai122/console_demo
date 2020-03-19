
// 1、验证null值
export function isNull(str) {
  return str === null || str === undefined || str === '' || str === 'null' || str === 'undefined';
}

// 2、验证String类型
export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

// 3、打开新页面
export function toPath(url) {
  window.location.href = url;
}

// 4、获取url参数
export function getQueryString(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

// 5、localStorage存值永久有效
export function setStorage(key, val) {
  localStorage.setItem(key, isString(val) ? val : JSON.stringify(val));
}

// 6、localStorage取值：（返回结果：JSON字符串）
export function getStorage(key) {
  return localStorage.getItem(key);
}

// 7、localStorage取值（返回结果：对象）
export function getObjStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// 8、localStorage删除指定键对应的值
export function delStorage(key) {
  localStorage.removeItem(key);
}

// // 9、h5返回到小程序，需引入https://res.wx.qq.com/open/js/jweixin-1.3.2.js，或更高版本
// export function backToMiniProgram() {
//   setTimeout(() => {
//     wx && wx.miniProgram.navigateBack({});
//   }, 1000);
// }

// 10、设置默认图片
export function getDefultImg(img) {
  return isNull(img) ? 'treasureA.png' : img;
}
