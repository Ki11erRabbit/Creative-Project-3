import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VCalendar from 'v-calendar';

Vue.use(VueRouter)

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  formats: {
    title: "MMMM YYYY",
    weekdays: "W",
    navMonths: "MMM",
    input: ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
    dayPopover: "L"
  }
});



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/Api',
    name: 'Api',//TODO change this for name
    component: () => import('../views/Api.vue')
  }
  /*{
    path: '/Template',
    name: 'Template',
    component: () => import('../views/Template.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
