export default {
  state: {
    isCollapse: false // 控制侧边栏的展开还是收起
  },
  mutations: {
    // 修改侧边栏展开收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}
