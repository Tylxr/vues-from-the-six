import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSms, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const icons = [faSms, faPaperPlane, faBell];
library.add(icons);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
