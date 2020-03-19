<!--
 * @Version: 1.0
 * @Autor: Eleven.Yi
 * @Date: 2019-12-08 10:31:09
 * @LastEditors: Ryan.HH
 * @LastEditTime: 2020-03-19 18:45:27
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {

  },
  methods: {

  },
};
</script>

<style lang="scss">
@import '@/common/css/base.scss';

#app {
  font-family:PingFangSC-Regular,PingFang SC;
}

.loading-error {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba($color: #000000, $alpha: 0.6);
  z-index: 9999;

  img {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 70vw;
  }
}
</style>
