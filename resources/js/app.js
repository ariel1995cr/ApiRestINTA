require('./bootstrap');

import PrimeVue from 'primevue/config';

import { createApp } from "vue";

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'weather-icons/css/weather-icons.min.css';
import ToastService from 'primevue/toastservice';

const app = createApp({});

import router from "./routes/index";
app.use(PrimeVue, {
    zIndex: {
        modal: 1100,        //dialog, sidebar
        overlay: 1000,      //dropdown, overlaypanel
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }
});
app.use(ToastService);
app.use(router);
app.mount('#app');


