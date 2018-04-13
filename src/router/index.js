import Vue from 'vue'
import Router from 'vue-router'
import ScrollDemo from '@/components/ScrollDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScrollDemo',
      component: ScrollDemo
    }
  ]
})
