export default {
  state: {
    isCollapse: false, // 控制侧边栏的展开还是收起
    // 面包屑数据存放处
    tabList: [{
      path: '/',
      name: 'home',
      label: '首页',
      icon: 's-home',
      url: 'Home/Home'
    }]
  },
  mutations: {
    // 修改侧边栏展开收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 修改更新面包屑数据
    selectMenu(state, val) {
      // 因为首页一开始就存在，所以不能再添加
      if (val.name !== 'home') {
        // 如果要跳转到面包屑中已有的地方，也不能继续添加
        const index = state.tabList.findIndex(item => item.path === val.path)
        if (index === -1) {
          state.tabList.push(val)
        }
      }
    },
    closeTag(state, item) {
      state.tabList = state.tabList.filter(val => val !== item)
      console.log(state.tabList)
    }
  }
}
