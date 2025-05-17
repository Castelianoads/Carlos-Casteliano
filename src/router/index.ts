import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { pageview } from 'vue-gtag';
import VueGtag from "vue-gtag";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Página Inicial',
      component: HomeView
    },
    {
      path: '/Contato',
      name: 'Contato',

      component: () => import('@/views/ContactView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

// router.afterEach((to) => {
//   pageview({
//     page_path: to.fullPath,
//     page_title: to.name?.toString(),
//   });
// });


export default router
