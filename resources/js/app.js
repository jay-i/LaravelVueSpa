require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);


import Toaster from 'v-toaster'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 5000})

import Swal from 'sweetalert2'
window.Swal = Swal


const router = new VueRouter(routes);

const app = new Vue({
    el: '#app',
    router,
});
