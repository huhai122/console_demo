/*
 * @Version: 1.0
 * @Autor: Eleven.Yi
 * @Date: 2019-12-08 10:31:09
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-15 17:20:06
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'max-len' : ["error", {code : 300}] 
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
