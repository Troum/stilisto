import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: "about" */ './views/Services.vue'),
      children: [
        {
          path: '',
          name: 'service',
          component: () => import('./components/Services.vue')
        },
        {
          path: 'women',
          name: 'women',
          component: () => import('./components/Women.vue')
        },
        {
          path: 'men',
          name: 'men',
          component: () => import('./components/Men.vue')
        },
        {
          path: 'nails',
          name: 'nails',
          component: () => import('./components/Nails.vue')
        },
        {
          path: 'cosmetics',
          name: 'cosmetics',
          component: () => import('./components/Cosmetics.vue')
        },
        {
          path: 'kids',
          name: 'kids',
          component: () => import('./components/Kids.vue')
        },
        {
          path: 'solarium',
          name: 'solarium',
          component: () => import('./components/Solarium.vue')
        }
      ]
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "about" */ './views/Gallery.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "about" */ './views/Contacts.vue')
    }
  ]
})
