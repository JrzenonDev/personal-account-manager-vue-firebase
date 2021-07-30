import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './pages/home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './pages/about/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './pages/login/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!window.uid && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
