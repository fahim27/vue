


require('./bootstrap');

window.Vue = require('vue');
import router from "./router";
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



Vue.component('admin', require('./components/admin/Main').default);




const app = new Vue({
    el: '#app',
    router

});
