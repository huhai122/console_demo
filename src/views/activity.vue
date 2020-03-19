/* eslint-disable vue/no-unused-components */
<!--
 * @Version: 1.0
 * @Autor: Eleven.Yi
 * @Date: 2019-12-08 10:43:35
 * @LastEditors: Ryan.HH
 * @LastEditTime: 2020-03-19 18:53:22
 -->
<template>
  <div class="page-container" >
    我很难受Orz
    <!-- <p style="color:#333">这是最新版本1.1</p> -->
  </div>

</template>


<script>


export default {
  name: 'activity-template',
  components: {

  },
  mixins: [],
  data() {
    return {

    };
  },
  created() {
    console.log(process.env);
  },
  methods: {

  },
};
</script>


<style lang="scss" scoped>
  .empty-page-container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .empty-title-image {
    width: 40vw;
    margin-top: 215px;
  }

  .empty-title {
    margin-top: 15px;
    font-size: 15px;
    color: #777777;
  }

  .empty-btn {
    width: 42vw;
    margin-top: 28px;
  }

  .order-btn {
    position: fixed;
    width: 65px;
    bottom: 60px;
    right: 10px;
  }
</style>
