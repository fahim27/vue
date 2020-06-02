import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "./components/admin/Home";
import User from "./components/admin/User";
import Login from "./components/admin/Login";
import store from "./store";


const routes = [

    {
        path: '/admin',
        component: Home,
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/user',
        component: User,


    },
    {
        path: '/login',
        component: Login,

    },

    // VueRouter.beforeEach((to, from, next) => {
    //     if (to.matched.some(record => record.meta.requiresAuth)) {
    //         if (store.getters.isAthenticate) {
    //             next()
    //             return
    //         }
    //         next('/login')
    //     } else {
    //         next()
    //     }
    // })

]




const  router=new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token')) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router
