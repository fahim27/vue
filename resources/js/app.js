


require('./bootstrap');

window.Vue = require('vue');
import router from "./router";



Vue.component('home', require('./components/Home.vue').default);
Vue.component('about', require('./components/About.vue').default);



const app = new Vue({
    el: '#app',
    router
});
