require('./bootstrap');

import { createApp } from "vue";

import 'bootstrap/scss/bootstrap.scss'
import 'weather-icons/css/weather-icons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../css/app.css';

import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp({});

import router from "./routes/index";

app.use(VueSweetalert2);
app.use(router);
app.use(VueGoogleMaps, {
    load: {
        key: process.env.MIX_GM_KEY,
    },
})
app.mount('#app');


