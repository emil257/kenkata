import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import NotFound from '../views/NotFound.vue'
import Blog from '../views/Blog.vue'
import LandingPage from '../views/LandingPage.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
import MyAccount from '../views/MyAccount.vue'
import Wishlist from '../views/Wishlist.vue'
import Compare from '../views/Compare.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Team from '../views/Team.vue'
import Portfolio from '../views/Portfolio.vue'
import PortfolioDetails from '../views/ProtfolioDetails.vue'
import BlogDetails from '../views/BlogDetails.vue'

import ShoppingCart from '../components/shoppingcart/shopping-cart.vue'
import CheckoutCart from '../components/shoppingcart/checkout-cart.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Landing Page',
        component: LandingPage
      },
      {
        path: 'account',
        name: 'My Account',
        component: MyAccount
      },
      {
        path: 'wishlist',
        name: 'Wishlist',
        component: Wishlist
      },
      {
        path: 'blog',
        name: 'Blog',
        component: Blog
      },
      {
        path: 'blog/details',
        name: 'Blog',
        component: BlogDetails
      },
      {
        path: 'compare',
        name: 'Compare',
        component: Compare
      },
      {
        path: 'about',
        name: 'About us',
        component: About
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: 'team',
        name: 'Team',
        component: Team
      },
      {
        path: 'portfolio',
        name: 'Protfolio',
        component: Portfolio
      },
      {
        path: 'portfolio/details',
        name: 'Protfolio',
        component: PortfolioDetails
      }
    ]
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: ShoppingCartView,
    children: [
      {
        path: '/',
        name: 'Cart',
        component: ShoppingCart
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: CheckoutCart
      }
    ]
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
