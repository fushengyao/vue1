import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/shop",
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/shop',
      name: 'ShopList',
      //第一次加载之后会被浏览器缓存，提高资源可用性，所有该组件的引用都必要变成异步，否则会导致资源再次被加载，造成资源浪费
      component: resolve => require(['@/components/shops/ShopList'], resolve)
    },

  ]
})
