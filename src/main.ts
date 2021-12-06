import { createApp } from 'vue'
import { ElButton, ElSelect, ElLoading } from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/theme-chalk/src/base.scss'
import './index.css'

const app = createApp(App)
const components = [ElButton, ElSelect]
const plugins = [ElLoading]

components.forEach((component) => {
  app.component(component.name, component)
})

plugins.forEach((plugin) => {
  app.use(plugin)
})

app.config.globalProperties.$ELEMENT = { size: 'small' }
app.use(store)
// app.use(router)
app.mount('#app')
