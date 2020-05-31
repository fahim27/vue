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

    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/login',
        component: Login,
        beforeEnter: (to, from, next) => {
           next()
        }
    },

]

export default new VueRouter({
    mode: 'history',
    routes
})
