import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mail from '../views/Mail.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mail',
    name: 'Mail',
    component: Mail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
   {
    path: '/cart/checkout',
    name: 'Checkout',
    component: Checkout
  },
]

const router = new VueRouter({
  routes
})

export default router
