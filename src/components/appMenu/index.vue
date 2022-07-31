<template>
  <div>
    <el-menu
        :default-active="defaultActiveIndex"
        width="198px"
        theme="light"
        @select="menuSelectFunc"
    >
      <div v-for="(item, index) in menuList" :key="index">
        <el-submenu :index="index + ''" v-if="!item.path && item.childList ">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item :index="k.path" v-for="(k,j) in item.childList" :key="j">
            {{ k.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" v-else>
          {{item.name}}
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
const menuTargetList = {
  post: [
    {
      name: 'mack配置',
      childList: [
        {
          name: '接口列表',
          path: '/home'
        }
      ]
    }
  ],
  other: [
    {
      name: '其他',
      childList: [
        {
          name: '其他添加',
          path: '/test2'
        },
        {
          name: '其他22',
          path: '/test3'
        }
      ]
    }
  ]
}
export default {
  name: "NavMenu",
  computed: {
    currentSub() {
      return this.$store.getters['getCurrentSub']
    }
  },
  watch: {
    currentSub: {
      immediate: true,
      handler(val) {
        this.defaultActiveIndex = val === 'post' ? '/home' : ''
        this.menuList = menuTargetList[val]
      }
    }
  },
  data() {
    return {
      menuList: [],
      defaultActiveIndex: '/home'
    }
  },
  methods: {
    menuSelectFunc(path) {
      console.log('跳转路径', path)
      this.$router.push(path);
    },
    handleClose() {}
  }
}
</script>
