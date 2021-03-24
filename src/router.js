import { createRouter, createWebHistory } from 'vue-router'

import Index   from './components/Index.vue'
//import About   from './components/About.vue'
//import Contact from './components/Contact.vue'



export const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/'       , name: 'index'  , component: Index  },
    ]
})




//        {path: '/about'  , name: 'about'  , component: About  },
//        {path: '/contact', name: 'contact', component: Contact}
