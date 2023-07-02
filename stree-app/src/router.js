import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';

const routes = [
  {
    path: '/Login', // Update the path to "/Login"
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }
  // Add other routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
