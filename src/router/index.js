// import {VueRouter} from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import routes from './modules/index'

console.log(routes);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
