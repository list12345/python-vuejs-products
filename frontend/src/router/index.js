import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListProductsView.vue')
  },
  { path: '/products/add',
    name: 'add_product',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddProductView.vue')
  },
  { path: '/products/edit/:id',
    name: 'edit_product',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditProductView.vue'),
    props: true
  },
  { path: '/products/delete/:id',
    name: 'delete_product',
    component: () => import(/* webpackChunkName: "about" */ '../views/DeleteProductView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
