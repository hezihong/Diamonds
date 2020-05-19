<template>
    <div>
        
        <van-nav-bar
        title="订单列表"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/mimy')"
        />
        <van-tabs v-model="active"  @change="onadd" class="orderlist">
            <van-tab title="全部订单">
            </van-tab>
            <van-tab title="待支付">
            </van-tab>
            <van-tab title="待收货">
            </van-tab>
            <van-tab title="已完成">
            </van-tab>
        </van-tabs>
        <!-- 三级路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
import '../../sass/main.scss'
    export default {
        data(){
            return {
                // active: 2
            }
        },
        methods:{
            onadd(index){
                // console.log(this.active)
                if(index == 0){
                    this.$router.push("/orderList/orderAll");
                }else if(index == 1){
                    this.$router.push("/orderList/orderPay");
                }else if(index == 2){
                    this.$router.push("/orderList/orderGoods");
                }else if(index == 3){
                    this.$router.push("/orderList/orderEnd");
                }
            }
        },
        
        created(){
            this.$store.state.vanTabbar = false;
            // console.log(this.$route.query);
            // this.active = this.$route.query.index;
            if("index" in this.$route.query){
                this.active = this.$route.query.index;
            }else{
                this.active = 0;
            }
            // console.log(this.active)
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
.orderlist{
    height: 44px;
}
    .van-tabs{
        height: 50px;
        line-height: 50px;
    }
    .van-tab{
        height:44px;
    }
</style>