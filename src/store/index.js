import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cart from "./cart";
import address from "./address";
import orderlist from "./orderlist";
import plant from "./plant";

export default new Vuex.Store({
  // 全局
  state: {
    vanTabbar:true, //底部导航控制
    num:200,
    username:''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart, //购物车 商品详情与购物车
    address,
    orderlist,
    plant
  }
})
