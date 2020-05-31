import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "./components/admin/Home";
import User from "./components/admin/User";
import Login from "./components/admin/Login";

const routes = [

    {
        path: '/admin',
        component: Home,
        beforeEnter:requireLogin


    },
    {
        path: '/user',
        component: User,
        beforeEnter:requireLogin

    },
    {
        path: '/login',
        component: Login,

    },

]

function requireLogin(to, from, next) {

        next({
            path: '/login',

        })

}


export default new VueRouter({
    mode: 'history',
    routes
})
