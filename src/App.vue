<template>
  <div id="app">
    <div class="tab">
      <router-link class="tab-item" to="/index">foo</router-link>
      <router-link class="tab-item" to="/about">bar</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="less" rel="stylesheet/less">
  .tab {
    display: flex;
    margin: 0 auto;
    width: 1200px;
    height: 40px;
    line-height: 40px;
    background: #137137;
    .tab-item {
      flex: 1;
      border-right: 1px solid #fff;
      text-align: center;
      color: #fff;
      :last-child {
        border-right: 0;
      }
    }
  }
</style>
