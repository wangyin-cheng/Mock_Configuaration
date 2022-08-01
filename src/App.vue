<template>
  <div id="app">
    <TopComponents />
    <div class="app-main com-clear-float">
      <div class="menu-warp">
        <NavMenu />
      </div>
      <div class="router-main">
        <div class="view">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopComponents from '@components/topComponents/top'
import NavMenu from '@components/appMenu'
export default {
  components: {
    TopComponents,
    NavMenu
  }
}
</script>
<style lang="less" scoped>
.app-main {
  width: 100%;
  height: calc(100% - 50px);
  position: relative;
  box-sizing: border-box;

  .menu-warp {
    width: 220px;
    float: left;
    background: white;
  }

  .router-main {
    width: calc(100% - 220px);
    float: right;
    height: 100%;
    background: #f0f2f5;
    padding: 10px;

    .view {
      background: white;
      border-radius: 8px;
      height: 100%;
    }
  }
}
</style>
