import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
// 导入全局样式
import './assets/styles/global.stylus'
// 引入字体图标
import './assets/font/iconfont.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false


// 全局时间过滤器
Vue.filter('timeFormat', (times) => {
  let minutes = parseInt(times / 1000 / 60) + ''
  minutes = minutes.padStart(2, '0')
  let seconds = parseInt(times / 1000 % 60) + ''
  seconds = seconds.padStart(2, '0')
  return `${minutes} : ${seconds}`
})

Vue.filter('playCountFilter', (val) => {
if (val >= 100000) {
  return `${parseInt(val / 10000)}万`
} else {
  return val
}
})

// 注册全局日期过滤器
Vue.filter('dateFormat', function (originVal) {
const dt = new Date(originVal)
const year = dt.getFullYear()
const month = (dt.getMonth() + 1 + '').padStart(2, '0')
const date = (dt.getDate() + '').padStart(2, '0')
const hour = (dt.getHours() + '').padStart(2, '0')
const minute = (dt.getMinutes() + '').padStart(2, '0')
const seconds = (dt.getSeconds() + '').padStart(2, '0')

return `${year}-${month}-${date} ${hour}:${minute}:${seconds}`
})

axios.defaults.baseURL = 'http://127.0.0.1:3000'

// 设置请求拦截器和响应拦截器
axios.interceptors.request.use(config => {
	// 展示进度条
	NProgress.start()
	// 在最后必须return config
	return config
})
// 在响应拦截器中隐藏进度条
axios.interceptors.response.use(response => {
	// 隐藏进度条
	NProgress.done()
	// 在最后必须return response
	return response
})

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

