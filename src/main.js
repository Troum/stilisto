import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload';
import isMobilePlugin from './plugins/is-mobile';
import './ml';
import './scss/main.scss';
import 'bootstrap/dist/js/bootstrap';
Vue.use(VueLazyLoad);
Vue.use(isMobilePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
