import { createRouter, createWebHistory } from 'vue-router';
import LandingpageView from '@/views/LandingpageView.vue';
import ContactView from '@/views/ContactView.vue';
import PrivacyView from '@/views/PrivacyView.vue';

const routes = [
  {
    path: '/landing-page',
    name: 'landing-page',
    component: LandingpageView
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContactView
  }, {
    path: '/politica-privacidade',
    name: 'politica-privacidade',
    component: PrivacyView
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  }
});

export default router
