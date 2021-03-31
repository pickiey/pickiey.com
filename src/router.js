import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path        : '/',
        name        : 'index',
        component   : () => import('./views/index.vue')
    }, {
        path        : '/about',
        name        : 'about',
        component   : () => import('./views/about.vue')
    }, {
        path        : '/contact',
        name        : 'contact',
        component   : () => import('./views/contact.vue')
    }
]

const routerOptions = {
    linkActiveClass      : 'active-link',
    linkExactActiveClass : 'exact-active-link',
    fallback             : false,
    history              : createWebHistory(),
    routes               : routes,
}

export const router = createRouter(routerOptions)
