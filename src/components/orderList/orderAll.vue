<template>
    <div>
        <!-- 订单遍历 -->
        <div v-for="(item,index) in lists" :key="index" class="orderBox">
            <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]">
                <!-- 商品遍历 -->
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                    :num="value.num"
                    :price="value.price"
                    :desc="value.info"
                    :title="value.name"
                    :thumb="value.src"
                    />
                </div>
                <!-- 待支付 -->
                <div v-if="item.type == 1" slot="footer" class="van-panel-footer">
                    <van-button size="small" type="danger" >删除订单</van-button>
                    <van-button size="small" type="primary" @click="onPay(item.orderId)" >支付订单</van-button>
                </div>
                <!-- 待收货 -->
                <div v-else-if="item.type == 2" slot="footer" class="van-panel-footer">
                    <van-button size="small" >退款申请</van-button>
                    <van-button size="small" @click="onGoods(item.orderId)"  >已收货</van-button>
                </div>
                <!-- 评价商品 -->
                <div v-else-if="item.type == 3" slot="footer" class="van-panel-footer">
                    <van-button size="small"  >商品评价</van-button>
                </div>
            </van-panel>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                lists:[],
                typeList:[],//订单状态
            }
        },
        methods:{
            onPay(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 2; //切换支付后待收货。调用支付接口
            },
            onGoods(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; //切换待收货改已完成。
            }
        },
        created(){
            this.lists = this.$store.state.orderlist.lists;
            this.typeList = this.$store.state.orderlist.typeList;
        },
        // 在组件销毁之前，
        // 把当前列表数据同步vuex数据中。
        beforeDestroy() {
            if(this.lists.length){
                this.$store.commit("orderlist/edit",this.lists);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .van-panel-footer{
        text-align: right;
    }
    .van-button{
        margin-left: 10px;
    }
    .orderBox{
        // height:150px !important;
        margin: 10px 0;
    }
    .van-panel {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background: #fff;
        box-shadow: 6px 3px 5px #888888;
    }
    .van-cell{
        border-bottom:1px solid #ccc;
    }
    
</style>