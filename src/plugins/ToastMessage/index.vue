<!--
 * @Description:
 * @Author: Eleven.Yi
 * @Date: 2019-12-06 15:21:04
 * @LastEditTime : 2020-01-14 17:23:29
 -->
<template>
  <div class="toastMessageBox" v-show="show">{{message}}</div>
</template>

<script>

export default {
  name: 'toastMessage',
  data() {
    return {
      message: '',
      show: false,
    };
  },
};
</script>

<style lang='scss' scoped>
.toastMessageBox{
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  text-align: center;
  z-index:999;
}
</style>
