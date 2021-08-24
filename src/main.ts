import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/common.scss';
import { TiltDirective } from './directives/tilt';

const app = createApp(App);
const tilt = new TiltDirective().Entry();
app.directive(tilt.name, tilt.obj);
app.mount('#app');
