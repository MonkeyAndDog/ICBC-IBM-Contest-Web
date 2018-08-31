import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Library from '../components/Library'
import About from '../components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/library',
      component: Library
    },
    {
      path: '/library/:part',
      component: Library
    },
    {
      path: '/library/:part/:section',
      component: Library
    },
    {
      path: '/about',
      component: About
    }
  ]
})
