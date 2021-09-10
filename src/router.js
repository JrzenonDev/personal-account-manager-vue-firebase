import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home', title: 'Home'
      },
      component: () => import(/* webpackChunkName: "home" */ './pages/home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        icon: 'podcast', title: 'About'
      },
      component: () => import(/* webpackChunkName: "about" */ './pages/about/About.vue')
    },
    {
      path: '/expanses-list',
      name: 'expanses-list',
      meta: {
        icon: 'list-ul', title: 'ExpansesList'
      },
      component: () => import(/* webpackChunkName: "expanses-list" */ './pages/expanses-list/ExpansesList.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        icon: 'login', title: 'Login'
      },
      component: () => import(/* webpackChunkName: "login" */ './pages/login/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Expanses`
  if (!window.uid && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
