import Vue from 'vue';
import Router from 'vue-router';
import PhoneConfirmation from '@/components/PhoneConfirmation';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PhoneConfirmation',
      component: PhoneConfirmation,
    },
    { path: '*', redirect: '/' },
  ],
});
