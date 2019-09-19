import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import '@/assets/css/tailwind.css';
import VuePageTransition from 'vue-page-transition';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
  events: 'blur|keyup'
});
Vue.use(VuePageTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
