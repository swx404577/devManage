import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui';
import './style/reset.css'
import 'element-ui/lib/theme-chalk/index.css';

// 加载本地文件
import App from './App'
import routes from './router/index'
import stores from './store/index'

Vue.use(ElementUI)
Vue.config.productionTip = false

//初始化路由
const router = new VueRouter({routes})
let store = new Vuex.Store(stores);
//同步路由和store的状态 这样可以从store中直接获取 path: '',query: null, params: null 的属性
sync(store, router);


//初始化入口vue对象
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')