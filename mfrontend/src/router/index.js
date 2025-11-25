import { createRouter, createWebHistory } from 'vue-router'

// 页面组件
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Diagnose from '../views/Diagnose.vue'
import Report from '../views/Report.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/diagnose', name: 'diagnose', component: Diagnose },
    { path: '/report/:id', name: 'report', component: Report },
    { path: '/about', name: 'about', component: About }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router