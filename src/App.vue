<template>
  <div id="app">
    <router-view class="app-view"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
  };
</script>

<style lang="less" rel="stylesheet/less">
  html,
  body {
    height: 100%;
    font-family: pingfang;
  }
  #app {
    height: 100%;
  }
  .app-view {
    height: 100%;
  }
</style>
