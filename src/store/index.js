import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
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

export default new Vuex.Store({
  state: {
    currentSub: 'post',
    menuList: menuTargetList['post']
  },
  getters: {
    getCurrentSub: (state) => {
      return state.currentSub
    },
    getMenuList: (state) => {
      return state.menuList
    }
  },
  mutations: {
    setCurrentSub: (state, data) => {
      state.currentSub = data;
      state.menuList = menuTargetList[state.currentSub]
    }
  }
})
