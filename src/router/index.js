import Vue from 'vue';
import VueRoter from 'vue-router';

//登陆界面
const Login = resolve => require(['../pages/login.vue'], resolve);
//首页界面
const Home = resolve => require(['../pages/home.vue'], resolve);

Vue.use(VueRoter);

//登录界面 以及首页几个基础界面的路由配置
const routes = [
  { path: '/',name:"login",component: Login },
  { path: '/login',name:"login",component: Login },
  { path: '/home',name:"home",component: Home },
]



export default routes;