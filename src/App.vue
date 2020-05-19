<template>
  <div>
    <!-- <h1>VueX中Models状态</h1> -->
    <!-- <ul>
        <router-link to="/item1" tag="li">功能一</router-link>
        <router-link to="/item2" tag="li">功能二</router-link>
        <router-link to="/item3" tag="li">功能三</router-link>
    </ul> -->
    
      <router-view></router-view>
    

      <van-tabbar v-model="active" class="bottom_box" :route="routerboo" v-show="$store.state.vanTabbar">
          <van-tabbar-item to="/main">
              <span>首页</span>
              <img slot="icon" slot-scope="props" :src="props.active ? icon.active:icon.inactive">
          </van-tabbar-item>
          <van-tabbar-item to="/miroll">
              <span>分类</span>
              <img slot="icon" slot-scope="props" :src="props.active ? icon.active2:icon.inactive2">
          </van-tabbar-item>
          <van-tabbar-item to="/plant">
              <span>星球</span>
              <img slot="icon"  slot-scope="props" :src="props.active ? icon.active3:icon.inactive3">
          </van-tabbar-item>
          <van-tabbar-item to="/shopcar">
              <span>购物车</span>
              <img slot="icon" slot-scope="props" :src="props.active ? icon.active4:icon.inactive4" >
          </van-tabbar-item>
          <van-tabbar-item to="/mimy">
              <span>我的</span>
              <img slot="icon" slot-scope="props" :src="props.active ? icon.active5:icon.inactive5">
          </van-tabbar-item>
      
      </van-tabbar>

      <div class="bottom"></div>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      routerboo:true,
      active: 0,
      icon: {
        active: '/img/mi-icon01red.png',
        inactive: '/img/mi-icon01gray.png',
        active2: '/img/mi-icon02red.png',
        inactive2: '/img/mi-icon02gray.png',
        active3: '/img/mi-icon03red.png',
        inactive3: '/img/mi-icon03gray.png',
        active4: '/img/mi-icon04red.png',
        inactive4: '/img/mi-icon04gray.png',
        active5: '/img/mi-icon05red.png',
        inactive5: '/img/mi-icon05gray.png',
      }
    }
  }
  }
</script>

<style lang="scss" scoped>
    .bottom{
      height:50px;
      width: 100%;
    }
    .van-tabbar-item--active{
      color: #ff6700;
      font-size: .22rem;
    }
    .van-tabbar-item{
      font-size: 16px;
    }
    .van-tabbar-item img{
      width: 20px;
      height:20px;
    }
    
    
</style>