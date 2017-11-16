import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/client/components/HelloWorld'
import Homepage from '@/client/components/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'homepage',
      component: Homepage
    }
  ]
})
