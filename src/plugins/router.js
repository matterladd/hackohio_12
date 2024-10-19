import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import SeriesList from '../views/SeriesList.vue'
import SeriesPage from '../views/SeriesPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/SeriesList', component: SeriesList },
  { path: '/SeriesPage/:id',name: 'SeriesPage', component: () => import('../views/SeriesPage.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
