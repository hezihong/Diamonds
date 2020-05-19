import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

// swiper插件
import "swiper/css/swiper.min.css";
import "animate.css";

import "./assets/font_1/iconfont.css"

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  /* 需要注册百度地图开发者来获取你的ak */
  ak: 'HH5aZNyD0nyf9KHTnojgtU7onrUDbF4L'
})

// import VueLazyload from 'vue-lazyload'
import { Lazyload } from 'vant';
import { Dialog } from 'vant';
Vue.use(Dialog)
Vue.use(Lazyload)
Vue.use(Vant);


// $cnpm i axios -S
import axios from "axios";
// 路径默认配置
axios.defaults.baseURL = 'http://127.0.0.1:3000/';
Vue.prototype.$axios = axios;

// import Flexible from "amfe-flexible";
// Vue.use(Flexible);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Lazyload, {
  lazyComponent: true
});