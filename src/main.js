import { createApp } from 'vue'
import App from './App.vue'
// 导入echarts
import echarts from './echarts/echarts'
// 挂载echarts到Vue.prototype
Vue.prototype.$echarts = echarts

createApp(App).mount('#app')
