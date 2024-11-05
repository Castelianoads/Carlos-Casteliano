//import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importa o ícone do LinkedIn

library.add(faLinkedin);

const app = createApp(App)

console.log(import.meta.env.MODE)
if(import.meta.env.MODE === 'production'){
  app.use(VueGtag, {
    config: { id: "G-MR8E3B3CQP" }
  });
}

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
