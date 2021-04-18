import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import AppHome from './components/app/AppHome'
import AdminHome from './components/admin/AdminHome'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: AppHome,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminHome,
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
