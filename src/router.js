import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../src/components/HomeView.vue'; 
import SecondPage from '../src/components/secondPage.vue'; 

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
   path: '/',
   name: 'home',
   component: HomeView
  },
  {
   path: '/second-page',
   name: 'second-page',
   component: SecondPage
  }
 ]
});

export default router;
    