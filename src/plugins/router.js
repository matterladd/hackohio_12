import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
