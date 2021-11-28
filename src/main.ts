import { createApp } from 'vue';
import { ElButton, ElSelect, ElLoading } from 'element-plus';
import App from './App.vue';
import router from './router';
import 'element-plus/theme-chalk/src/base.scss';

const app = createApp(App);
const components = [ElButton, ElSelect];
const plugins = [ElLoading];

components.forEach((component) => {
  app.component(component.name, component);
});

plugins.forEach((plugin) => {
  app.use(plugin);
});

app.config.globalProperties.$ELEMENT = { size: 'small' };
app.use(router);
app.mount('#app');
