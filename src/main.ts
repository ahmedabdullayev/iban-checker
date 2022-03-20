import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'font-awesome/css/font-awesome.min.css';
createApp(App).use(router).mount('#app')
