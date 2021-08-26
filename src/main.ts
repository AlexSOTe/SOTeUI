import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/common.scss';
import { directives } from './directives';

const app = createApp(App);
//指令
directives.map(v => app.directive(v.name, v.obj))

app.mount('#app');
