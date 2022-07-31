<template>
  <div class="top-warp">
    <div class="image-main">
      <img alt="Vue logo" src="@assets/image/logo.png">
    </div>
    <div class="top-main">
      <span v-for="(item,index) in butList" :key="index" :class="{'action-span': item.value === currentSpan, 'span-class': true}" @click="spanClick(item)">
        {{item.label}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopComponents",
  data() {
    return {
        text: '',
        currentSpan: 'post',
        butList: [
          {value: 'post', label: '接口列表'},
          {value: 'other', label: '新增接口'}
        ]
    }
  },
  methods: {
    spanClick(item) {
      this.currentSpan = item.value;
      this.$store.commit('setCurrentSub', this.currentSpan)
    }
  }
}
</script>

<style lang="less" scoped>
.top-warp {
  height: 50px;
  width: 100%;
  background: rgb(64, 158, 255);
  display: flex;
  justify-content: flex-start;
  align-items: center;


  .image-main {
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .top-main {
    //width: calc(100% - 120px);
  }

  .span-class {
    height: 100%;
    padding: 0 14px;
    display: inline-block;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    vertical-align:middle;
    position: relative;
    margin: 0 10px;

    &:hover {
      opacity: 0.8;
    }
  }

  .action-span {
    &::after {
      content: '';
      width: 74px;
      height: 1px;
      background: white;
      position: absolute;
      bottom: -6px;
      left: 4px;
    }
  }
}
</style>
