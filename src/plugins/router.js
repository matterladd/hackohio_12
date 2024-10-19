import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import SeriesList from '../views/SeriesList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/SeriesList', component: SeriesList },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
