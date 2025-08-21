import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../layouts/auth/sign-in/index.vue'

import ProjectList from '../views/projects/list/index.vue'
import ProjectCreate from '../views/projects/create/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
    },

    {
      path: '/',
      name: 'home',
      component: ProjectList,
    },
    {
      path: '/projects/create',
      name: 'ProjectCreate',
      component: ProjectCreate,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
