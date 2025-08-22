import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../layouts/auth/sign-in/index.vue'

import ProjectList from '../views/projects/list/index.vue'
import ProjectCreate from '../views/projects/create/index.vue'
import ProjectDetail from '../views/projects/detail/index.vue'

import { useBreadcrumb } from './breadcrumb'
const { project, user } = useBreadcrumb()

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
      // meta: {
      //   requiresAuth: true,
      //   layout: 'default',
      // },
      // meta: {
      //   breadcrumb: project.list(),
      // },
      beforeEnter(to, from, next) {
        to.meta.breadcrumb = project.list()
        next()
      },
    },
    {
      path: '/projects/list',
      name: 'ProjectList',
      component: ProjectList,
      // meta: {
      //   requiresAuth: true,
      //   layout: 'default',
      // },
      beforeEnter(to, from, next) {
        to.meta.breadcrumb = project.list()
        next()
      },
    },
    {
      path: '/projects/create',
      name: 'ProjectCreate',
      component: ProjectCreate,
      beforeEnter(to, from, next) {
        to.meta.breadcrumb = project.create()
        next()
      },
    },
    {
      path: '/projects/detail/:id',
      name: 'ProjectDetail',
      component: ProjectDetail,
      beforeEnter(to, from, next) {
        to.meta.breadcrumb = project.detail()
        next()
      },
    },
  ],
})

export default router
