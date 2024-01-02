import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePost from '../views/CreatePost.vue'
import CreateUser from '../views/CreateUser.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import UpdatePost from '../views/UpdatePost.vue'
import HomeViewGames from '../views/HomeViewGames.vue'
import HomeViewAnimes from '../views/HomeViewAnimes.vue'
import HomeViewHerois from '../views/HomeViewHerois.vue'
import HomeViewFilmesESeries from '../views/HomeViewFilmesESeries.vue'
import Search from '../views/Search.vue'


const routes = [
  {
    path: '/home',
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
    path: '/createpost',
    name: 'createpost',
    component: CreatePost
  },
  {
    path: '/createuser',
    name: 'createuser',
    component: CreateUser
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/updatepost/:id',
    name: 'updatepost',
    component: UpdatePost
  },
  {
    path: '/games',
    name: 'games',
    component: HomeViewGames
  },
  {
    path: '/animes',
    name: 'animes',
    component: HomeViewAnimes
  },
  {
    path: '/herois',
    name: 'herois',
    component: HomeViewHerois
  },
  {
    path: '/filmeseseries',
    name: 'filmeseseries',
    component: HomeViewFilmesESeries
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
