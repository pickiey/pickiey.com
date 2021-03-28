import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path      : '/',
        component : () => import('./views/index.vue'),
        name      : 'index'
    }, {
        path      : '/about',
        component : () => import('./views/about.vue'),
        name      : 'about'
    }, {
        path      : '/contact',
        component : () => import('./views/contact.vue'),
        name      : 'contact'
    }, {
        path      : '/sorry',
        component : () => import('./views/sorry.vue'),
        name      : 'sorry'
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
