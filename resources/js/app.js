


require('./bootstrap');

window.Vue = require('vue');
import router from "./router";
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


Vue.component('admin', require('./components/admin/Main').default);
Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));

import store from "./store";





const app = new Vue({
    el: '#app',
    router,
    store

});
