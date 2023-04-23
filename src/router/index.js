import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  // 主路由
  {
    path: '/',
    component: Main,
    redirect: '/home',
    // 子路由
    children: [{
        path: 'home',
        name: 'home',
        component: Home
      }, // 首页
      {
        path: 'user',
        name: 'user',
        component: User
      }, // 用户管理
      {
        path: 'mall',
        name: 'mall',
        component: Mall
      }, // 商品管理
      {
        path: 'page1',
        name: 'page1',
        component: PageOne
      }, // 页面一
      {
        path: 'page2',
        name: 'page2',
        component: PageTwo
      } // 页面二

    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
