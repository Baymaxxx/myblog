<template>
  <div id="app">
    <ul class="tab">
      <li class="tab-item">
        <router-link to="/foo">foo</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/bar">bar</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
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
      :last-child{
        border-right: 0;
      }
      & > a {
        color: #fff;
      }
    }
  }
</style>
