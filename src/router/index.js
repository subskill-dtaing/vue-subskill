import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // If user not logged in,
  // Only routes Login and Register are accessible
  // Otherwise, disabled routes Login and Register

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      if (to.name === 'Login' || to.name === 'Register') {
        next('/')
      } else {
        next();
      }
    } else {
      // No user is signed in.
      if (to.name === 'Login' || to.name === 'Register') {
        next();
      } else {
        next('/login');
      }
    }
  });
});

export default router
