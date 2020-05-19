import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import main from "./main.js"
import my from "./my.js"
import publics from "./public.js"
import shopcar from "./shopcar.js"
import order from "./order.js"


const routes = [
  {
    path:"/",
    redirect:"/advertpage", //默认跳转广告页
  },
  ...main,
  ...my,
  ...publics,
  ...shopcar,
  ...order,
  {
    path:"/miroll",
    component:()=>import("../views/mi-roll.vue")
  },
  
  {
    path:"/plant",//星球
    component:()=>import("../views/plant.vue")
  },
  {
    path:"/plantadd",//星球添加
    component:()=>import("../components/plant/plantAdd.vue")
  },
  {
    path:"/plantinfo",//星球添加
    component:()=>import("../components/plant/plantInfo.vue")
  },

  {
    path:"/miinfo",
    component:()=>import("../views/mi-info.vue")
  },
  {
    path:"/search",
    name:"搜索",
    component:()=>import("../components/search/search.vue")
  },
  {
    path:"/list",
    name:"手机",
    component:()=>import("../views/mi-list.vue")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"con"
})

export default router
