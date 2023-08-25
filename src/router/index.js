import { createRouter, createWebHistory } from 'vue-router'
import HouseView from "@/views/HouseView.vue";

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'house',
    component: HouseView
  },
  {
    path: '/houses/:id',
    name: 'house-edit',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HouseEditView.vue')
    }
  },
  {
    path: '/entrances',
    name: 'entrance',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/EntranceView.vue')
    }
  },
  {
    path: '/entrances/:id',
    name: 'entrance-edit',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/EntranceEditView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
