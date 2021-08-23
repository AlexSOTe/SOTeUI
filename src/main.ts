import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/common.scss';
import tilt from './directives/tilt';

const app = createApp(App);
app.directive(tilt.name, tilt.obj);
app.mount('#app');
