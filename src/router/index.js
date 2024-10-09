import { createRouter, createWebHistory } from 'vue-router';
import LandingpageView from '@/views/LandingpageView.vue';
import ContactView from '@/views/ContactView.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: LandingpageView
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
